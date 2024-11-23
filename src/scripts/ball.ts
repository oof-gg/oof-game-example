import Paddle from './paddle';

export default class Ball {
  private canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
  private x: number = 0;
  private y: number = 0;
  private radius = 8;
  private speedX = 4;
  private speedY = 4;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
  }

  // update the ball position and check for collisions w/ paddle and walls
  update(paddle: Paddle) {
    this.x += this.speedX;
    this.y += this.speedY;

    // check for collision with walls (left and right)
    if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
      this.speedX *= -1;
    }

    // check for collision with walls (top)
    if (this.y - this.radius < 0) {
      this.speedY *= -1; // reverse direction
    }

    // check for collision with paddle (x-axis)
    const paddlePos = paddle.getPosition();
    const minBallPosX = this.x - this.radius; // left edge of ball
    const maxBallPosX = this.x + this.radius; // right edge of ball
    const minBallPosY = this.y - this.radius; // top edge of ball
    const maxBallPosY = this.y + this.radius; // bottom edge of ball
    const paddleLeft = paddlePos.x;
    const paddleRight = paddlePos.x + paddlePos.width;
    const paddleTop = paddlePos.y;
    const paddleBottom = paddlePos.y + paddlePos.height;

    const topPaddleTouched = maxBallPosY > paddleTop;
    const leftPaddleTouched = maxBallPosX > paddleLeft;
    const rightPaddleTouched = minBallPosX < paddleRight;

    // check for collision with paddle (x-axis & y-axis)
    if (topPaddleTouched && leftPaddleTouched && rightPaddleTouched) {
      this.y = paddlePos.y - this.radius; // prevent sticking
      this.speedY *= -1;

      console.log("Collision with paddle:", paddlePos.x, paddlePos.y, paddlePos.width, paddlePos.height);
    }
    
    // reset ball if it goes below the paddle
    if (this.y + this.radius > this.canvas.height) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
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