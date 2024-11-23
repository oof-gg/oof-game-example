export default class Paddle {
  private canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
  private width: number = 100;
  private height: number = 10;
  private x: number = 0;
  private y: number = 0;
  private speed = 5;
  private direction: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
  
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  private reset() {
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - 30;
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      this.direction = -1;
    } else if (e.key === 'ArrowRight') {
      this.direction = 1;
    }
    console.log("Key pressed: " + e.key);
  }

  private handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      this.direction = 0;
    }
  }

  update() {
    this.x += this.direction * this.speed;
    this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width)); // keep paddle within canvas bounds
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#000';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }


}