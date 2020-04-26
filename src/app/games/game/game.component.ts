import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { GameService } from '../game.service';
import { Game, Card } from '../game';
import { LocalStorageService } from '../../local-storage.service';

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

    this.card = this.localStorage.playerCard;
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
          (game: Game) => this.game = game,
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
            this.localStorage.playerCard = card;
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );
  }
}
