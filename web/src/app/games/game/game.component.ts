import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { GameService } from '../../api/repositories/game.service';
import { Game, Card } from '../../api/models/game';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  game: Game;
  card: Card;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService,
    private readonly localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getGame(params.key);
    });
  }

  get gameKey(): string {
    return this.game && this.game.key ? this.game.key : 'Loading...';
  }

  get gameName(): string {
    return this.game && this.game.name ? this.game.name : 'Loading...';
  }

  getGame(key: string) {
    this.blockUI.start('Loading Game...');
    this.gameService
        .getGameByKey(key)
        .subscribe(
          (game: Game) => {
            this.game = game;
            this.card = this.localStorage.getPlayerCard(this.game.id);
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );
  }

  getGameCard() {
    this.blockUI.start('Getting Card...');
    this.gameService
        .getGameCard(this.game.id)
        .subscribe(
          (card: Card) => {
            this.card = card;
            this.localStorage.setPlayerCard(card, this.game.id);
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );    
  }
}
