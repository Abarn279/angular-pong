import { Position } from './position';
import { MoveableObject } from './moveable-object';
import { SpeedRatio } from './speed-ratio';

export class Paddle extends MoveableObject {
    private speedRatio: SpeedRatio;

    constructor(height: number, width: number, maxSpeed: number, position: Position) {
        super(height, width, maxSpeed, position);
        this.speedRatio = {x: 0, y: maxSpeed};
    }

    moveUp(): void {
        // Because Y axis goes down, subtracting makes model go up
        this.speedRatio.y = -Math.abs(this.speedRatio.y);
        super.move(this.speedRatio);
    }

    moveDown(): void {
        // Because Y axis goes down, adding makes model go down
        this.speedRatio.y = Math.abs(this.speedRatio.y);
        super.move(this.speedRatio);
    }
}
