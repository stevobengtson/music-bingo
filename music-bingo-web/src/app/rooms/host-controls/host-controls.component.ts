import { Component, OnInit } from '@angular/core';
import { GameService, GameState } from 'src/app/games/game.service';
import { StaticReflector } from '@angular/compiler';

@Component({
  selector: 'app-host-controls',
  templateUrl: './host-controls.component.html',
  styleUrls: ['./host-controls.component.scss']
})
export class HostControlsComponent implements OnInit {
  gameState: GameState = GameState.NONE;
  isHost = false;
  clipPlaying = false;

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.gameState.subscribe((state: GameState) => {
      this.gameState = state;
    });
    this.gameService.hosting.subscribe((host: boolean) => this.isHost = host);
  }

  get gameNotStarted(): boolean {
    return this.gameState !== GameState.STARTED;
  }

  get gameStarted(): boolean {
    return this.gameState === GameState.STARTED;
  }

  startNewGame() {
    this.gameService.startNewGame();
  }
}
