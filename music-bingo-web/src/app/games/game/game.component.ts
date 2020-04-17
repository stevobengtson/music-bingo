import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { Game, Clip } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  card: Clip[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getGame(params.key);
    });
  }

  getGame(key: string) {
    this.gameService.getGameByKey(key).subscribe((game: Game) => this.game = game);
  }

  getGameCard() {
    this.gameService.getGameCard(this.game.id).subscribe((card: Clip[]) => this.card = card);
  }
}
