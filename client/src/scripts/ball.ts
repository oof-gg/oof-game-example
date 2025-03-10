import Paddle from './paddle';

export default class Ball {
  private canvas: HTMLCanvasElement;
  private x: number = 0;
  private y: number = 0;
  private radius = 8;
  private speedX = 40;
  private speedY = 40;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
  }

  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
  }

  private reset() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speedX = 4 * (Math.random() * 2 - 1); // randomize initial direction
    this.speedY = 4;
  }

}