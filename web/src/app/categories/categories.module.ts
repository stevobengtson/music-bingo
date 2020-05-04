import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryService } from './category.service';
import { CreateCategoryComponent } from './create-category.component';

@NgModule({
  declarations: [
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CreateCategoryComponent
  ]
})
export class CategoriesModule { }
