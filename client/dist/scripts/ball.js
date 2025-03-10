export default class Ball {
    canvas;
    x = 0;
    y = 0;
    radius = 8;
    speedX = 40;
    speedY = 40;
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
    }
    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.speedX = 4 * (Math.random() * 2 - 1); // randomize initial direction
        this.speedY = 4;
    }
}
