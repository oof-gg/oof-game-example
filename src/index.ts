import Game from "./scripts/game.js";

const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const game = new Game(canvas);
game.start();