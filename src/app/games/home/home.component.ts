import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentGames: Game[] = [];

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.getCurrentGames();
  }

  getCurrentGames() {
    this.gameService.getMany().subscribe((games: Game[]) => this.currentGames = games);
  }
}
