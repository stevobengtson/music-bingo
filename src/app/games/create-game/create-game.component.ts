import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../categories/category.service';
import { Category, Game } from '../game';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  categories: Category[];

  gameName: string;
  selectedCategory: number = 1;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly gameService: GameService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getMany().subscribe((categories: Category[]) => this.categories = categories);
  }

  onSubmit() {
    console.log('Creating game: ', this.gameName, this.selectedCategory);
    this.gameService
        .createGame(this.gameName, this.selectedCategory)
        .subscribe((game: Game) => this.router.navigate(['games', game.key]));
  }
}
