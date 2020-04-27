import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ClipsComponent } from './clips.component';
import { ClipService } from './clip.service';

@NgModule({
  declarations: [
    ClipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ClipService
  ],
  exports: [
    ClipsComponent
  ]
})
export class ClipsModule { }
