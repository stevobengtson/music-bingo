import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '@api/repositories/category.service';
import { Category } from '@api/models/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  @Output() onCategoryCreated = new EventEmitter<Category>();

  categoryName: string;

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newCategory: Category = {
      name: this.categoryName
    };
  
    this.categoryService
        .post(newCategory)
        .subscribe((category: Category) => {
          this.categoryName = null;
          this.onCategoryCreated.emit(category);
        });
  }
}
