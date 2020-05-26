import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateCategoryComponent } from './create-category.component';

@NgModule({
  declarations: [
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    CreateCategoryComponent
  ]
})
export class CategoriesModule { }
