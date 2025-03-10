import Paddle from "./paddle";
import Ball from "./ball";
import Config from "./config";

export default class Game {
  private animationFrameId: number | null = null;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private paddles: { [playerId: string]: Paddle } = {};
  private ball: Ball;
  private lastFrameTime: number = 0; // used to calculate delta time for fps
  private localPlayerId: string = "";
  private paddleMoveCallback: (x: number, y: number, width: number, height: number) => void = () => {};
  private importedConfig: any;
  private gameStarted: boolean;
  private config: any;
  
  constructor(canvas: HTMLCanvasElement, importedConfig: any) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.update = this.update.bind(this);
    this.ball = new Ball(this.canvas);
    this.importedConfig = importedConfig;
    this.animationFrameId = null;
    this.gameStarted = false;
    this.config = {}
  }

  resizeCanvas(gameWidth: number, gameHeight: number) {
    // TODO: Improve this implementation
    const canvasWidth = this.importedConfig.authConfig.configMap.filter((config: any) => {
      if(config[0] === "screenWidth") {
        return config;
      }})[1]
    const canvasHeight = this.importedConfig.authConfig.configMap.filter((config: any) => {
      if(config[0] === "screenHeight") {
        return config;
      }})[1]
    const dpr = parseInt(this.importedConfig.authConfig.configMap.filter((config: any) => {
      if(config[0] === "dpr") {
        return config;
      }})[1]) || 1;

    console.log(this.importedConfig);

    // Resize the canvas to match the game width and height, while maintaining the aspect ratio. Put black bars on the sides or top/bottom if needed. Also handle the device pixel ratio.
    const gameAspectRatio = gameWidth / gameHeight;
    const windowAspectRatio = canvasWidth / canvasHeight;

    // Adjust canvas CSS size based on aspect ratio
    if (gameHeight > canvasHeight || gameWidth > canvasWidth) {
      if (gameHeight / canvasHeight > gameWidth / canvasWidth) {
      // Fit height, add black bars sides
      this.canvas.style.width = `${canvasHeight * gameAspectRatio}px`;
      this.canvas.style.height = `${canvasHeight}px`;
      } else {
      // Fit width, add black bars top/bottom
      this.canvas.style.width = `${canvasWidth}px`;
      this.canvas.style.height = `${canvasWidth / gameAspectRatio}px`;
      }
    } else {
      // No scaling needed, fit within window
      this.canvas.style.width = `${canvasWidth}px`;
      this.canvas.style.height = `${canvasHeight}px`;
    }

    // Set internal canvas resolution to match game size * DPR
    this.canvas.width = gameWidth * dpr;
    this.canvas.height = gameHeight * dpr;
    this.ctx.scale(dpr, dpr);

    this.config = {
      gameWidth,
      gameHeight,
      canvasWidth,
      canvasHeight,
      dpr,
    }
  }

  setInitialState(currPlayerId: string, gameState: any, playerRole: string, gameWidth: number, gameHeight: number) {
    this.localPlayerId = currPlayerId;

    this.resizeCanvas(gameWidth, gameHeight);
    let i = 0;
    for (const playerId in gameState.paddles) {
      let bottom_player = playerRole === "bottom";
      // update the position to be opposite for second player
      if (i === 1) {
        bottom_player = !bottom_player;
      }
      
      this.paddles[playerId] = new Paddle(this.canvas, playerId, playerId === this.localPlayerId, bottom_player, this.config);
      i++;
    }

    this.ball.setPosition(gameState.ball.x, gameState.ball.y);

    // Render the player's name in the top-left corner
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(this.localPlayerId, 10, 30);
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

    this.animationFrameId = requestAnimationFrame(this.loop);
  }

  private update() {
    Object.values(this.paddles).forEach(paddle => paddle.update());
  }

  private draw() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    Object.values(this.paddles).forEach(paddle => paddle.draw(this.ctx));
    this.ball.draw(this.ctx);

    // Render the player's name in the top-left corner
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(this.localPlayerId, 10, 30);
  }

  start() {
    const localPaddle = this.paddles[this.localPlayerId];
    localPaddle?.onMove((x: number, y: number, width: number, height: number) => {
      this.paddleMoveCallback(x, y, width, height);
    });

    this.animationFrameId = requestAnimationFrame(this.loop);
    this.gameStarted = true;
  }

  isStarted() {
    return this.gameStarted;
  }

  unload() {
    // Cancel the animation frame
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    // Remove event listeners from paddles
    Object.values(this.paddles).forEach(paddle => {
      paddle.removeEventListeners();
    });
    this.gameStarted = false;
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}