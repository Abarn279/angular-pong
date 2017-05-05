import { Position } from './position';
import { Boundaries } from './boundaries';
import { SpeedRatio } from './speed-ratio';

export abstract class MoveableObject {
    /**
     * Constructs a moveable object
     * @param {Number} height - the height of the moveable object, in pixels
     * @param {Number} width - the width of the moveable object, in pixels
     * @param {Number} maxSpeed - the max distance, in pixels, the object can move
     * @param {Number} position - the initial position of the object
     */
    constructor(private height: number, 
                private width: number, 
                private maxSpeed: number, 
                private position: Position) {
    }

    /**
     * Moves default amount, scalable by a percentage of the object's max speed
     * @param {Number} xratio - the percentage of maxSpeed to move in x direction
     * @param {Number} yratio - the percentage of maxSpeed to move in y direction
     */
    move(speedRatio: SpeedRatio): void {
        this.position.x += this.maxSpeed * speedRatio.x;
        this.position.y += this.maxSpeed * speedRatio.y;
    }

    /**
     * @return {Position} - The current position of this object
     */
    getPosition(): Position {
        return this.position;
    }

    /**
     * @return {Boundaries} - The current boundaries of the object, helpful for collision checking
     */
    getCollisionBoundaries(): Boundaries {
        return {
            top: this.position.y - this.height / 2,
            bottom: this.position.y + this.height / 2,
            right: this.position.x + this.width / 2,
            left: this.position.x - this.width / 2
        }
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}
