import { Component, OnInit } from '@angular/core';
import { GameService, GameState } from 'src/app/games/game.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateGameComponent } from 'src/app/games/create-game/create-game.component';

@Component({
  selector: 'app-host-controls',
  templateUrl: './host-controls.component.html',
  styleUrls: ['./host-controls.component.scss']
})
export class HostControlsComponent implements OnInit {
  gameState: GameState = GameState.NONE;
  isHost = false;
  clipPlaying = false;

  constructor(
    private modalService: NgbModal,
    private readonly gameService: GameService
  ) { }

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
    this.modalService.open(CreateGameComponent, { size: 'lg', centered: true });
  }
}
