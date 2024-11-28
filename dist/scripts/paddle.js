export default class Paddle {
    canvas = document.querySelector('canvas');
    width = 100;
    height = 20;
    x = 0;
    y = 0;
    speed = 10;
    direction = 0;
    playerId = '';
    isLocalPlayer = false;
    isInverted = false;
    moveCallback = () => { }; // Default to no-op
    constructor(canvas, playerId, isLocalPlayer, isInverted = false) {
        this.canvas = canvas;
        this.reset();
        this.isInverted = isInverted;
        this.y = isInverted ? 30 : this.canvas.height - 30;
        this.isLocalPlayer = isLocalPlayer;
        this.playerId = playerId;
        this.isInverted = isInverted;
        if (this.isLocalPlayer) {
            console.log("Adding event listeners for local player");
            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('keyup', this.handleKeyUp);
        }
        console.log("Paddle created:", this.playerId, this.isLocalPlayer);
    }
    reset() {
        this.x = (this.canvas.width - this.width) / 2;
        this.y = this.isInverted ? 30 : this.canvas.height - 30;
    }
    handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            this.direction = -1; // Invert for top player
        }
        else if (e.key === "ArrowRight") {
            this.direction = 1; // Invert for top player
        }
    };
    handleKeyUp = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            this.direction = 0;
        }
    };
    setPosition(x) {
        this.x = x;
    }
    update() {
        if (this.isLocalPlayer) {
            const prevX = this.x;
            this.x += this.direction * this.speed;
            this.x = Math.max(0, Math.min(this.x, this.canvas.width - this.width)); // keep paddle within canvas bounds
            if (prevX !== this.x) {
                console.log("Paddle moved:", this.x);
                this.moveCallback(this.x, this.y, this.width, this.height);
            }
        }
    }
    updatePosition(x) {
        if (!this.isLocalPlayer) {
            this.x = x;
        }
    }
    draw(ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    onMove(callback) {
        if (this.isLocalPlayer) {
            this.moveCallback = callback;
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
