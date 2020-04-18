import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GamesRoutingModule } from './games-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [CreateGameComponent, HomeComponent, GameComponent],
  imports: [CommonModule, NgbModule, GamesRoutingModule]
})
export class GamesModule { }
