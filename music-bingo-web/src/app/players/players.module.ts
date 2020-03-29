import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerCreateComponent } from './create/create.component';

@NgModule({
  declarations: [PlayerCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PlayerCreateComponent]
})
export class PlayersModule { }
