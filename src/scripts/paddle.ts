export default class Paddle {
  private canvas: HTMLCanvasElement;
  private width: number = 100;
  private height: number = 20;
  private x: number = 0;
  private y: number = 0;
  private speed = 10;
  private direction: number = 0;
  private playerId: string = '';
  private isLocalPlayer: boolean = false;
  private isInverted: boolean = false;
  private config: any;
  private dpr: number;
  private moveCallback: (x: number, y: number, width: number, height: number) => void = () => {} // Default to no-op

  constructor(canvas: HTMLCanvasElement, playerId: string, isLocalPlayer: boolean, isInverted: boolean = false, config: any) {
    this.canvas = canvas;
    this.isInverted = isInverted;
    this.isLocalPlayer = isLocalPlayer;
    this.playerId = playerId;
    this.isInverted = isInverted;
    this.config = config;
    this.dpr = config.authConfig.config.dpr || 1;
    this.y = isInverted ? 30 : this.canvas.height/this.dpr - 30;

    this.reset();

    if(this.isLocalPlayer) {
      console.log("Adding event listeners for local player");
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
    }

    console.log("Paddle created:", this.playerId, this.isLocalPlayer);
  }

  private reset() {
    this.x = (this.canvas.width/this.dpr - this.width) / 2;
    this.y = this.isInverted ? 30 : this.canvas.height/this.dpr - 30;
    console.log("Paddle reset:", this.x, this.y);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      this.direction = -1 // Invert for top player
    } else if (e.key === "ArrowRight") {
      this.direction = 1 // Invert for top player
    }
  }

  private handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      this.direction = 0;
    }
  }

  setPosition(x: number) {
    this.x = x;
  }

  update() {
    if(this.isLocalPlayer) {
      const prevX = this.x;
      this.x += this.direction * this.speed;
      this.x = Math.max(0, Math.min(this.x, (this.canvas.width/this.dpr - this.width))); // keep paddle within canvas bounds

      if(prevX !== this.x) {
        console.log("Paddle moved:", this.x);
        this.moveCallback(this.x, this.y, this.width, this.height);
      }
    }
  }

  updatePosition(x: number) {
    if(!this.isLocalPlayer) {
      this.x = x;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  onMove(callback: (x: number, y: number, width: number, height: number) => void) {
    if(this.isLocalPlayer) {
      this.moveCallback = callback
    }
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }

  setAsLocalPlayer() {
    this.isLocalPlayer = true;  
  }


}