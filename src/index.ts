import Game from "./scripts/game";
import { game_instance } from '@oof.gg/protobuf-ts';

export const main = (canvas: HTMLCanvasElement, config: game_instance.InstanceCommandMessage) => {
  console.log("Hello from main!");
  console.log("Config received from parent:", config);
  const gameConfig = config.authConfig?.config;

  let game:any = null;
  const ws = new WebSocket("ws://0.0.0.0:9090");

  //TODO: Add SDK to the game so that playerauth can be done

  ws.onopen = () => {
    console.log("Connected to ws");

    // now that we are connected to the server, we can send the REGISTER_PLAYER message

    let playerName: string | null = null;
    let isInverted = false // Assume the opponent is at the top
    
    const message = {
      state: game_instance.InstanceCommandEnum.START,
      playerId: config.playerId,
    }

    // Listen for messages from the main thread
    game = new Game(canvas, config);
    // check type of command
    switch (message.state) {
      case game_instance.InstanceCommandEnum.START:
        console.log("Starting game");
        // joinGame since we have the playerName coming from the message
        playerName = message.playerId || null;
        ws.send(JSON.stringify({ type: "REGISTER_PLAYER", 
          playerName: message.playerId
        }));
        break;
      case game_instance.InstanceCommandEnum.STOP:
        console.log("Stopping game");
        break;
      default:
        console.error("Unknown command:", message.state);
    }

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch(message.type) {
        case "INIT":
          isInverted = message.playerRole === "top";
          game.setInitialState(message.playerName, message.gameState, message.playerRole, message.gameWidth, message.gameHeight);
          playerName = message.playerName;
          game.start();
          break;
        case "STATE_UPDATE":
          game.updateState(message.gameState);
          break;
        default:
          console.error("Unknown message type:", message.type);
      }
    }

    // grab the payerName from the input field and when user presses joinButton, send a REGISTER_PLAYER message to the server
    game.onPaddleMove((x: number, y: number, width: number, height: number) => {
      ws.send(JSON.stringify({ type: "UPDATE_PADDLE", playerName, x, y, width, height }));
    });

  }
}


