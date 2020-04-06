import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreateGameComponent } from './create-game/create-game.component';

@NgModule({
  declarations: [CreateGameComponent],
  imports: [CommonModule, NgbModule]
})
export class GamesModule { }
