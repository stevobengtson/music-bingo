import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

import { GameService } from './game.service';
import { CategoryService } from '../categories/category.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CreateGameComponent, HomeComponent, GameComponent, CardComponent],
  imports: [CommonModule, FormsModule, NgbModule, GamesRoutingModule, BlockUIModule.forRoot(), SharedModule],
  providers: [GameService, CategoryService]
})
export class GamesModule { }
