import Paddle from "./paddle.js";
import Ball from "./ball.js";
export default class Game {
    canvas = document.querySelector("canvas");
    ctx = this.canvas.getContext("2d");
    paddle = new Paddle(this.canvas);
    ball = new Ball(this.canvas);
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.paddle = new Paddle(this.canvas);
        this.ball = new Ball(this.canvas);
        console.log("Game initialized");
        this.update = this.update.bind(this);
    }
    update() {
        this.paddle.update();
        this.ball.update(this.paddle);
    }
    draw() {
        this.ctx.fillStyle = "#CCC";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.paddle.draw(this.ctx);
        this.ball.draw(this.ctx);
    }
    loop = () => {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    };
    start() {
        this.loop();
        console.log("Game started");
    }
}
