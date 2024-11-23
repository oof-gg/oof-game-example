export default class Paddle {
    canvas = document.querySelector('canvas');
    width = 100;
    height = 10;
    x = 0;
    y = 0;
    speed = 5;
    direction = 0;
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }
    reset() {
        this.x = (this.canvas.width - this.width) / 2;
        this.y = this.canvas.height - 30;
    }
    handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            this.direction = -1;
        }
        else if (e.key === 'ArrowRight') {
            this.direction = 1;
        }
        console.log("Key pressed: " + e.key);
    };
    handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            this.direction = 0;
        }
    };
    update() {
        this.x += this.direction * this.speed;
        this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width)); // keep paddle within canvas bounds
    }
    draw(ctx) {
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
