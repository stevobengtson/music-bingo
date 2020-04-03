import { Component } from '@angular/core';
import { GameService } from './games/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-bingo-web';

  constructor(
    private readonly gameService: GameService
  ) {
    this.gameService.initialize();
  }
}
