import { Ball } from './ball';
import { Boundaries } from './boundaries';
import { Paddle } from './paddle';

export class PongGame {
    public ball: Ball;
    public playerPaddle: Paddle;

    private height: number
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;

        // Construct game objects
        this.ball = new Ball(15, 15, 3, { x: height / 2, y: width / 2 }, { x: 1, y: 1 });
        this.playerPaddle = new Paddle(100, 20, 6, { x: 50, y: height / 2 });
    }

    tick() {
        // Ball tick
        this.ball.move();

        let ballBounds = this.ball.getCollisionBoundaries();
        if (ballBounds.bottom >= this.height || ballBounds.top <= 0)
            this.ball.reverseY();

        if (ballBounds.right >= this.width) 
            this.ball.reverseX();

        // Paddle hit
        let paddleBounds = this.playerPaddle.getCollisionBoundaries();
        if (ballBounds.left <= paddleBounds.right && 
            paddleBounds.right - ballBounds.left <= 3 &&
            ballBounds.bottom >= paddleBounds.top && 
            ballBounds.top <= paddleBounds.bottom) {
                this.ball.reverseX();
            } 

    }

    gameOver(): boolean {
        if (this.ball.getCollisionBoundaries().left <= 0) return true;
        else return false;
    }
}
