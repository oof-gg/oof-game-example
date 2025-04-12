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
        // Bidirectional stream: read client data and send responses
        call.on('data', (event) => {

            if(event.eventName === 'CLIENT_CONNECTED') {
                console.log('Client connected:', event.data);
                call.write({
                  id: `conn-${Date.now()}`, // Unique connection ID
                  eventName: "SERVER_CONNECTED",
                  timestamp: Math.floor(Date.now() / 1000),
                  type: GameEvent_EventType.TYPE_SYSTEM, // System message type is appropriate for connection events
                  attributes: {
                    "status": {
                      stringValue: "connected"
                    },
                    "server_id": {
                      stringValue: process.env.SESSION_ID // You can use any server identifier here
                    },
                    "connection_timestamp": {
                      stringValue: new Date().toISOString()
                    }
                  }
                });
            }

            console.log('Received client event:', event);
            

            // Handle different event types
            if (event.eventName === 'REGISTER_PLAYER') {
              console.log('Player registration received:', event.data);
              
              // Send confirmation
              call.write({
                id: `reg-confirm-${Date.now()}`,
                eventName: "PLAYER_REGISTERED", // Different event name than SERVER_CONNECTED
                timestamp: Math.floor(Date.now() / 1000),
                type: GameEvent_EventType.TYPE_SYSTEM,
                attributes: {},
                data: JSON.stringify({
                    success: true,
                    message: "Player registered successfully", 
                    player_id: event.playerId,
                    registered_at: new Date().toISOString()
                })
              });
            } 
            else if (event.eventName === 'CONNECTION_CONFIRMED') {
              // Send connection confirmation
              call.write({
                id: `conn-${Date.now()}`, // Unique connection ID
                eventName: "CONNECTION_CONFIRMED",
                timestamp: Math.floor(Date.now() / 1000),
                type: GameEvent_EventType.TYPE_SYSTEM, // System message type is appropriate for connection events
                attributes: {
                  "status": {
                    stringValue: "connected"
                  },
                  "server_id": {
                    stringValue: "game-server-1" // You can use any server identifier here
                  },
                  "connection_timestamp": {
                    stringValue: new Date().toISOString()
                  }
                }
              });
            }
            // Echo the event or transform as needed
            // call.write(event);
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
