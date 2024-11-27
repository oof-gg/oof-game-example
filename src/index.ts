import { join } from "path";
import Game from "./scripts/game.js";

const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const game = new Game(canvas);

const ws = new WebSocket("ws://localhost:9090");

let playerName: string | null = null;
let isLocalPlayer = true // Always consider self as the bottom paddle
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
    playerName: playerNameInput.value,
    screenX: window.innerWidth,
    screenY: window.innerHeight
  }));
  // hide #gameNav
  document.getElementById("gameNav")?.classList.add("d-none");
}

// send a REGISTER_PLAYER message to the server
joinButton.addEventListener("click", () => {
  console.log("Sending REGISTER_PLAYER message to server");
  joinGame();
});

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch(message.type) {
    case "INIT":
      console.log("Received INIT message from server");
      isInverted = message.playerRole === "top";
      game.setInitialState(message.playerName, message.gameState, message.playerRole);
      console.log("Player ID:", message.playerName);
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
game.onPaddleMove((x: number, y: number, width: number, height: number) => {
  console.log("Sending paddle update:", playerName, x);
  ws.send(JSON.stringify({ type: "UPDATE_PADDLE", playerName, x, y, width, height }));
});
