import { Server as GrpcServer, ServerCredentials } from '@grpc/grpc-js';
import { api_common_instance_service, api_game_event } from '@oof.gg/protobuf-ts';
import { GameEvent_EventAttribute } from '@oof.gg/protobuf-ts/dist/v1/api/game/event';
  const { InstanceServiceService } = api_common_instance_service;
  const { GameEvent_EventType } = api_game_event;
  
const grpcServer = new GrpcServer();
const instanceServiceImpl: api_common_instance_service.InstanceServiceServer = {
      streamEvents: (call) => {
        console.log('Client connected to streamEvents');
        console.log('Client ID:', call.getPeer());
        console.log('Sending connected event to client');
        // Handle client connection
        
        call.write({
          type: GameEvent_EventType.TYPE_GAME_EVENT,
          timestamp: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
          attributes: {
            value: {
              stringValue: 'connected',
            }
          }        
        });

        // Bidirectional stream: read client data and send responses
        call.on('data', (event) => {
            console.log('Received client event:', event);
            // Echo the event or transform as needed
            call.write(event);
        });
        
        call.on('end', () => {
            call.end();
            console.log('Client stream ended');
        });
    },
};

interface Player {
  id: string;
  name: string;
  role: 'bottom' | 'top';
}

interface GameState {
  paddles: Record<string, { x: number; y?: number; width?: number; height?: number }>;
  ball: { x: number; y: number; dx: number; dy: number };
}

let players: Player[] = [];
let gameWidth = 390;
let gameHeight = 844;

let gameState: GameState = {
  paddles: {}, // Store paddle positions by player ID
  ball: {
    x: Math.floor(gameWidth / 2),
    y: Math.floor(gameHeight / 2),
    dx: 8,
    dy: 8,
  }, // Ball position and velocity
};

function generatePlayerId(): string {
  return Math.random().toString(36).substring(2, 9); // Generate unique ID
}

grpcServer.addService(InstanceServiceService, instanceServiceImpl);
const grpcPort = process.env.PORT || 50051;
grpcServer.bindAsync( `0.0.0.0:${grpcPort}`,  ServerCredentials.createInsecure(),
  (err, port) => {

    if (err) {
      console.error('Error binding gRPC server:', err);
      return;
    }

    console.log(`gRPC server listening on port ${port}`);
  }
);
