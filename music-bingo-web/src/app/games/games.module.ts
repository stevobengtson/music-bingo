import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { CreateGameComponent } from './create-game/create-game.component';

@NgModule({
  declarations: [CreateGameComponent],
  imports: [CommonModule],
  providers: [GameService],
  exports: [GameService]
})
export class GamesModule { }
