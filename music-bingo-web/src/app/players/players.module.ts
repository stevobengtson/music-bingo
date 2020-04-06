import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePlayersComponent } from './create-players/create-players.component';

@NgModule({
  declarations: [CreatePlayersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CreatePlayersComponent]
})
export class PlayersModule { }
