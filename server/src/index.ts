import { api_game_game_service, api_game_instance, api_game_event } from '@oof.gg/protobuf-ts';
import { fork } from 'child_process';
import { Server, ServerCredentials } from '@grpc/grpc-js';

api_game_instance.Instance

const numProcesses = 4;
const workers: any = [];

// Create worker processes
for (let i = 0; i < numProcesses; i++) {
  const worker = fork('./worker.js');
  workers.push(worker);

  // Receive events from worker processes
  worker.on('message', (event: api_game_event.GameEvent) => {
    // Handle the event received from the worker
    console.log('Received event from worker:', event);
  });
}

const gameService = {
  gameEventStream: (call: any) => {
    call.on('data', (event: api_game_event.GameEvent) => {
      // Distribute events to worker processes
      const worker = workers[Math.floor(Math.random() * workers.length)];
      worker.send(event);
    });

    call.on('end', () => {
      call.end();
    });
  }
};

const server = new Server();
server.addService(api_game_game_service.GameServiceService, gameService);

const port = '0.0.0.0:50051';
server.bindAsync(port, ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running at ${port}`);
  server.start();
});

