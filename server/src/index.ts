import { Server as GrpcServer, ServerCredentials } from '@grpc/grpc-js';
import { api_common_instance_service, api_game_event } from '@oof.gg/protobuf-ts';
import { GameEvent_EventAttribute } from '@oof.gg/protobuf-ts/dist/v1/api/game/event';
  const { InstanceServiceService } = api_common_instance_service;
  const { GameEvent_EventType } = api_game_event;


interface Player {
  id: string;
  name: string;
  role: 'bottom' | 'top';
}

interface GameState {
  paddles: Record<string, { x: number; y?: number; width?: number; height?: number }>;
  ball: { x: number; y: number; dx: number; dy: number };
}

function generatePlayerId(): string {
  return Math.random().toString(36).substring(2, 9); // Generate unique ID
}

function generatePaddleId(playerName: string): string {
  return `paddle-${playerName}`;
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

const grpcServer = new GrpcServer();
const instanceServiceImpl: api_common_instance_service.InstanceServiceServer = {
      streamEvents: (call) => {
        console.log('Client connected to streamEvents');
        console.log('Client ID:', call.getPeer());
        console.log('Sending connected event to client');
        
        
        setInterval(() => {
          const ball = gameState.ball;
          ball.x += ball.dx;
          ball.y += ball.dy;

          // Bounce off left and right walls
          if (ball.x <= 0 || ball.x >= gameWidth) {
            ball.dx *= -1;
            // Prevent ball from getting stuck in walls
            if (ball.x <= 0) ball.x = 0 + 1;
            if (ball.x >= gameWidth) ball.x = gameWidth - 1;
          }
          
          // Ricochet off top and bottom walls
          if (ball.y <= 0 || ball.y >= gameHeight) {
            ball.dy *= -1;
            // Prevent ball from getting stuck in walls
            if (ball.y <= 0) ball.y = 0 + 1;
            if (ball.y >= gameHeight) ball.y = gameHeight - 1;
            
            // Add slight randomness to horizontal direction after vertical bounce
            // to make the game more interesting
            ball.dx = ball.dx * (0.95 + Math.random() * 0.1);
          }

          // Check for paddle collisions
          for (const playerName in gameState.paddles) {
            const paddle = gameState.paddles[playerName];
            const paddleWidth = paddle.width ?? 100;
            const paddleHeight = paddle.height ?? 20;
            const paddleY = paddle.y ?? 30;
            
            // Find which player this is to determine position
            const player = players.find(p => p.name === playerName);
            
            if (player) {
              // Check collision based on player role (top or bottom)
              if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
                if ((player.role === 'bottom' && ball.y > paddleY && ball.y < paddleY + paddleHeight) ||
                    (player.role === 'top' && ball.y > paddleY && ball.y < paddleY + paddleHeight)) {
                  
                  // Reverse vertical direction on collision
                  ball.dy *= -1;
                  
                  // Add some angle based on where the ball hit the paddle
                  const hitPosition = (ball.x - paddle.x) / paddleWidth;
                  ball.dx = ball.dx * 0.5 + (hitPosition - 0.5) * 10; // Adjusts angle based on hit position
                  
                  console.log(`Collision detected with ${playerName}'s paddle!`);
                  
                  // Ensure ball doesn't get stuck in paddle
                  if (player.role === 'bottom') {
                    ball.y = paddleY - 1;
                  } else {
                    ball.y = paddleY + paddleHeight + 1;
                  }
                }
              }
            }
          }

          // Send game state to client
          const gameStateMessage = {
            id: `game-state-${Date.now()}`,
            eventName: "STATE_UPDATE",
            timestamp: Math.floor(Date.now() / 1000),
            type: GameEvent_EventType.TYPE_GAME_EVENT,
            attributes: {},
            data: JSON.stringify(gameState)
          };

          call.write(gameStateMessage);

        }, 1000 / 30); // 30 FPS
        
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
              
              const canvasWidth = event.canvasWidth;
              const canvasHeight = event.canvasHeight;
              console.log(`Player registered: ${event.playerId}`);
              const playerId = generatePlayerId();
              const playerName = event.playerId;
              let playerRole: 'bottom' | 'top' = 'bottom';
              // if a player is already on the bottom, the new player will be on the top (check explicitly)
              let bottomPlayer = players.find((player) => player.role === 'bottom');
              if (bottomPlayer) {
                playerRole = 'top';
              }

              // When registering a player, set the initial y-position based on role
              if (playerRole === 'bottom') {
                gameState.paddles[playerName] = { 
                  x: Math.floor(gameWidth / 2),
                  y: gameHeight - 30, // Bottom of screen minus some padding
                  width: 100,
                  height: 20
                };
              } else {
                gameState.paddles[playerName] = { 
                  x: Math.floor(gameWidth / 2),
                  y: 10, // Top of screen plus some padding
                  width: 100,
                  height: 20
                };
              }

              // create player object to track player id and name for the position
              const player: Player = { id: playerId, name: playerName, role: playerRole };

              // Add the new player to the player array if it doesn't already exist
              if (!players.find((player) => player.name === playerName)) {
                players.push(player);
              } else {
                // if the player already exists, update the player id
                players = players.map((player) => {
                  if (player.name === playerName) {
                    player.id = playerId;
                  }
                  return player;
                });
              }

              console.log(`Players: ${players.map((player) => player.name)}`);

              // Initialize paddle position for the new player
              gameState.paddles[playerName] = { x: Math.floor(gameWidth / 2) };          
              
              // Send confirmation
              call.write({
                type: GameEvent_EventType.TYPE_GAME_EVENT,
                id: `reg-confirm-${Date.now()}`,
                eventName: "INIT", // Different event name than SERVER_CONNECTED
                timestamp: Math.floor(Date.now() / 1000),
                attributes: {},
                data: JSON.stringify({ playerName, playerRole, gameState, gameWidth, gameHeight })
              });
            } 

            if (event.eventName === 'UPDATE_PADDLE') {
              console.log('Paddle update received:', event.data);
              const { playerId, x, y, width, height } = event.data;
              
              // Find the player to determine their role
              const player = players.find(p => p.name === playerId);
              
              if (player && player.role === 'top') {
                // Fix the inverted coordinates for the top player
                const adjustedX = gameWidth - x - (width ?? 100);
                gameState.paddles[playerId] = { x: adjustedX, y, width, height };
              } else {
                // For bottom player or if player not found, use coordinates as-is
                gameState.paddles[playerId] = { x, y, width, height };
              }
            }            
            
            if (event.eventName === 'CONNECTION_CONFIRMED') {
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
