export default class GameNavigation {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private joinGameCallback: (() => void) | null = null;
    // Define the button's dimensions and position
    private buttonX: number;
    private buttonY: number;
    private buttonWidth: number;
    private buttonHeight: number;
  
    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('2D context not supported on canvas');
      }
      this.context = ctx;
  
      // Define button dimensions (centered on canvas)
      this.buttonWidth = 150;
      this.buttonHeight = 50;
      this.buttonX = (canvas.width - this.buttonWidth) / 2;
      this.buttonY = (canvas.height - this.buttonHeight) / 2;
  
      // Draw the button initially
      this.drawButton();
  
      // Attach a click event listener to the canvas
      this.canvas.addEventListener('click', this.handleClick.bind(this));
    }
  
    private drawButton(): void {
      const ctx = this.context;
      // Clear the area where the button will render
      // (optional—clear the entire canvas if needed)
      // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      // Draw button background
      ctx.fillStyle = '#007bff'; // blue background
      ctx.fillRect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
  
      // Draw button border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
  
      // Draw button text
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Join Game', this.buttonX + this.buttonWidth / 2, this.buttonY + this.buttonHeight / 2);
    }
  
    private handleClick(event: MouseEvent): void {
      // Calculate canvas-relative click coordinates
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      // Check if the click is within the button's boundaries
      if (
        x >= this.buttonX &&
        x <= this.buttonX + this.buttonWidth &&
        y >= this.buttonY &&
        y <= this.buttonY + this.buttonHeight
      ) {
        console.log('Canvas button clicked');
        if (this.joinGameCallback) {
          this.joinGameCallback();
        }
      }
    }
  
    /**
     * Register a callback to be called when the "Join Game" button is clicked
     */
    public onJoinGame(callback: () => void): void {
      this.joinGameCallback = callback;
    }
  }