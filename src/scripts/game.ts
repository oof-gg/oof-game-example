import Paddle from "./paddle.js";
import Ball from "./ball.js";

export default class Game {
  private canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  private paddle: Paddle = new Paddle(this.canvas);
  private ball: Ball = new Ball(this.canvas);

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.canvas.width = 800;
    this.canvas.height = 600;

    this.paddle = new Paddle(this.canvas);
    this.ball = new Ball(this.canvas);
    console.log("Game initialized");

    this.update = this.update.bind(this);
  }

  private update() {
    this.paddle.update();
    this.ball.update(this.paddle);
  }

  private draw() {
    this.ctx.fillStyle = "#CCC";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddle.draw(this.ctx);
    this.ball.draw(this.ctx);
  }

  loop = () => {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop);
  }

  start() {
    this.loop();
    console.log("Game started");
  }
}