import { Position } from './position';
import { MoveableObject } from './moveable-object';
import { SpeedRatio } from './speed-ratio';

export class Ball extends MoveableObject {
    private speedRatio: SpeedRatio;

    constructor(height: number, width: number, maxSpeed: number, position: Position, speedRatio: SpeedRatio) {
        super(height, width, maxSpeed, position);
        this.speedRatio = speedRatio;
    }

    /**
     * Reverses the ball in the x direction
     */
    reverseX(): void {
        this.speedRatio.x = -this.speedRatio.x;
    }

    /**
     * Reverses the ball in the y direction
     */
    reverseY(): void {
        this.speedRatio.y = -this.speedRatio.y;
    }

    /**
     * Sets new vertical speed ratio of max speed
     */
    setVerticalSpeedRatio(verticalSpeedRatio: number): void {
        this.speedRatio.y = verticalSpeedRatio;
    }

    /**
     * Moves object using existing speed ratio
     */
    move() {
        super.move(this.speedRatio);
    }
}
