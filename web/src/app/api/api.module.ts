import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryService } from './repositories/category.service';
import { ClipService } from './repositories/clip.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
      CategoryService,
      ClipService
  ],
  exports: []
})
export class ApiModule { }
