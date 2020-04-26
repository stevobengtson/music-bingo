import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  page: number = 1;
  limit: number = 10;
  total: number = 0;

  currentGames: Game[] = [];

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.getCurrentGames();
  }

  getCurrentGames() {
    this.blockUI.start('Refreshing...');
    this.gameService
        .getMany(this.page, this.limit)
        .subscribe(
          (gameResponse: HttpResponse<Game[]>) => {
            this.total = parseInt(gameResponse.headers.get('Total'));
            this.currentGames = gameResponse.body
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );
  }
}
