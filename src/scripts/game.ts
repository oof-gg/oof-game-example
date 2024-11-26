import Paddle from "./paddle.js";
import Ball from "./ball.js";
import Config from "./config.js";

export default class Game {
  private canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  private paddles: { [playerId: string]: Paddle } = {};
  private ball: Ball = new Ball(this.canvas);
  private lastFrameTime: number = 0; // used to calculate delta time for fps
  private localPlayerId: string = "";
  private paddleMoveCallback: (x: number, y: number, width: number, height: number) => void = () => {};

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.canvas.width = 800;
    this.canvas.height = 600;

    this.update = this.update.bind(this);
    this.ball = new Ball(this.canvas);
  }


  setInitialState(currPlayerId: string, gameState: any, playerRole: string) {
    this.localPlayerId = currPlayerId;
    console.log("Game state:", gameState);

    console.log("Local player ID:", this.localPlayerId);
    let i = 0;
    for (const playerId in gameState.paddles) {
      let bottom_player = playerRole === "bottom";
      console.log("Player role:", playerRole, bottom_player);
      // update the position to be opposite for second player
      if (i === 1) {
        bottom_player = !bottom_player;
        console
      }
      

      console.log("Creating paddle for player:", playerId, this.localPlayerId, playerRole);
      this.paddles[playerId] = new Paddle(this.canvas, playerId, playerId === this.localPlayerId, bottom_player);
      i++;
    }

    this.ball.setPosition(gameState.ball.x, gameState.ball.y);
  }
  
  updateState(gameState: any) {
    for (const playerId in gameState.paddles) {
      // only update the position of the paddle if it's not the local player
      if (playerId !== this.localPlayerId) {
        this.paddles[playerId].setPosition(gameState.paddles[playerId].x);
      }
    }

    this.ball.setPosition(gameState.ball.x, gameState.ball.y);
  }

  onPaddleMove(callback: (x: number, y: number, width: number, height: number) => void) {
    console.log("Setting paddle move callback");
    this.paddleMoveCallback = callback;
  }

  loop = (timestamp: number) => {
    const timeSinceLastFrame = timestamp - this.lastFrameTime;
    const targetFrameTime = 1000 / Config.fps;

    if(timeSinceLastFrame >= targetFrameTime) {
      this.lastFrameTime = timestamp;
      this.update();
      this.draw();
    }

    requestAnimationFrame(this.loop);
  }

  private update() {
    Object.values(this.paddles).forEach(paddle => paddle.update());
  }

  private draw() {
    this.ctx.fillStyle = "#CCC";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    Object.values(this.paddles).forEach(paddle => paddle.draw(this.ctx));
    this.ball.draw(this.ctx);
  }

  start() {
    const localPaddle = this.paddles[this.localPlayerId];
    console.log("Local paddle:", localPaddle);
    localPaddle?.onMove((x: number, y: number, width: number, height: number) => {
      console.log("Paddle move callback:", x);
      this.paddleMoveCallback(x, y, width, height);
    });

    requestAnimationFrame(this.loop);
  }
}