import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Controls } from '../enums/controls';
import { PongGame } from '../classes/pong-game';
import { Boundaries } from '../classes/boundaries';

@Component({
  selector: 'pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss']
})
export class PongGameComponent implements OnInit {
  @ViewChild('PongCanvas') canvasElement: ElementRef

  public width: number = 800;
  public height: number = 600;

  private context: CanvasRenderingContext2D;

  private pongGame: PongGame;

  constructor() {
    this.pongGame = new PongGame(this.height,this.width);
  }

  ngOnInit() {
    this.context = this.canvasElement.nativeElement.getContext('2d');
    this.renderFrame();
  }

  renderFrame(): void {
    // Only run if game still going
    if (this.pongGame.gameOver()) {
      this.context.font = "30px Arial";
      this.context.fillText("Game Over!", 50, 50);
      return;
    }

    // Draw background
    this.context.fillStyle = 'rgb(0,0,0)';
    this.context.fillRect(0, 0, this.width, this.height);

    // Set to white for game objects
    this.context.fillStyle = 'rgb(255,255,255)';

    let bounds: Boundaries;

    // Draw player paddle
    var paddleObj = this.pongGame.playerPaddle;
    bounds = paddleObj.getCollisionBoundaries();
    this.context.fillRect(bounds.left, bounds.top, paddleObj.getWidth(), paddleObj.getHeight());

    // Draw ball
    var ballObj = this.pongGame.ball;
    bounds = ballObj.getCollisionBoundaries();
    this.context.fillRect(bounds.left, bounds.top, ballObj.getWidth(), ballObj.getHeight());

    // Tick automated stuff
    this.pongGame.tick();

    // Render next frame
    window.requestAnimationFrame(() => this.renderFrame());
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode == Controls.Up) {
      this.pongGame.playerPaddle.moveUp();
    }
    if (event.keyCode == Controls.Down) {
      this.pongGame.playerPaddle.moveDown();
    }
  }
}
