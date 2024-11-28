import { join } from "path";
import Game from "./scripts/game.js";

const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const game = new Game(canvas);

const ws = new WebSocket("ws://localhost:9090");

let playerName: string | null = null;
let isInverted = false // Assume the opponent is at the top

// grab playerName from playerName input field
const playerNameInput = document.getElementById("playerName") as HTMLInputElement;

// save the playerName in localStorage and load it when the page is refreshed
playerNameInput.value = localStorage.getItem("playerName") || "";

playerNameInput.addEventListener("input", () => {
  localStorage.setItem("playerName", playerNameInput.value);
});

// grab the payerName from the input field and when user presses joinButton, send a REGISTER_PLAYER message to the server

const joinButton = document.getElementById("joinButton") as HTMLButtonElement;

ws.onopen = () => {
  console.log("Connected to server");
}

const joinGame = () => {
  ws.send(JSON.stringify({ type: "REGISTER_PLAYER", 
    playerName: playerNameInput.value
  }));
  // hide #gameNav
  document.getElementById("gameNav")?.classList.add("d-none");
}

// send a REGISTER_PLAYER message to the server
joinButton.addEventListener("click", () => {
  joinGame();
});

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch(message.type) {
    case "INIT":
      isInverted = message.playerRole === "top";
      game.setInitialState(message.playerName, message.gameState, message.playerRole, message.gameWidth, message.gameHeight);
      playerName = message.playerName;
      let gameWidth = message.gameWidth;
      let gameHeight = message.gameHeight;

      // Resize the canvas to match the game width and height, while maintaining the aspect ratio. Put black bars on the sides or top/bottom if needed.

      game.start();
      break;
    case "STATE_UPDATE":
      game.updateState(message.gameState);
      break;
    default:
      console.error("Unknown message type:", message.type);
  }
}
game.onPaddleMove((x: number, y: number, width: number, height: number) => {
  ws.send(JSON.stringify({ type: "UPDATE_PADDLE", playerName, x, y, width, height }));
});
