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

    this.update = this.update.bind(this);
    this.ball = new Ball(this.canvas);
  }

  resizeCanvas(gameWidth: number, gameHeight: number) {
    // Resize the canvas to match the game width and height, while maintaining the aspect ratio. Put black bars on the sides or top/bottom if needed. Also handle the device pixel ratio.
    const aspectRatio = gameWidth / gameHeight;
    const windowAspectRatio = window.innerWidth / window.innerHeight;

    // Adjust canvas CSS size based on aspect ratio
    if (aspectRatio > windowAspectRatio) {
        // Wider game area: Fit width, add black bars top/bottom
        this.canvas.style.width = `${window.innerWidth}px`;
        this.canvas.style.height = `${window.innerWidth / aspectRatio}px`;
    } else {
        // Taller game area: Fit height, add black bars sides
        this.canvas.style.width = `${window.innerHeight * aspectRatio}px`;
        this.canvas.style.height = `${window.innerHeight}px`;
    }

    // Account for device pixel ratio (DPR)
    const dpr = window.devicePixelRatio || 1;

    // Set internal canvas resolution to match game size * DPR
    this.canvas.width = gameWidth * dpr;
    this.canvas.height = gameHeight * dpr;

    this.ctx.scale(dpr, dpr);
  }

  setInitialState(currPlayerId: string, gameState: any, playerRole: string, gameWidth: number, gameHeight: number) {
    this.localPlayerId = currPlayerId;

    let i = 0;
    for (const playerId in gameState.paddles) {
      let bottom_player = playerRole === "bottom";
      // update the position to be opposite for second player
      if (i === 1) {
        bottom_player = !bottom_player;
        console
      }
      
      this.paddles[playerId] = new Paddle(this.canvas, playerId, playerId === this.localPlayerId, bottom_player);
      i++;
    }

    this.ball.setPosition(gameState.ball.x, gameState.ball.y);
    this.resizeCanvas(gameWidth, gameHeight);
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
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    Object.values(this.paddles).forEach(paddle => paddle.draw(this.ctx));
    this.ball.draw(this.ctx);
  }

  start() {
    const localPaddle = this.paddles[this.localPlayerId];
    localPaddle?.onMove((x: number, y: number, width: number, height: number) => {
      this.paddleMoveCallback(x, y, width, height);
    });

    requestAnimationFrame(this.loop);
  }
}