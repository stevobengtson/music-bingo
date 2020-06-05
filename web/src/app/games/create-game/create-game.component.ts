import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@api/repositories/category.service';
import { Game } from '@api/models/game';
import { GameService } from '@api/repositories/game.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Category } from '@app/api/models/category';

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
    this.categoryService
        .getMany()
        .subscribe((response: HttpResponse<Category[]>) => {
          this.categories = response.body;
        });
  }

  onSubmit() {
    const newGame: Game = {
      name: this.gameName,
      category_id: this.selectedCategory
    };

    this.gameService
        .post(newGame)
        .subscribe((game: Game) => this.router.navigate(['games', game.key]));
  }
}
