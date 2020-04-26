import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryService } from './category.service';
import { CreateCategoryComponent } from './create-category.component';
import { ClipsComponent } from './clips/clips.component';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    ClipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CreateCategoryComponent,
    ClipsComponent
  ]
})
export class CategoriesModule { }
