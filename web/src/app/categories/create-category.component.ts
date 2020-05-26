import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../api/repositories/category.service';
import { Category } from '../api/models/game';

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
    this.categoryService
        .createCategory(this.categoryName)
        .subscribe((category: Category) => this.onCategoryCreated.emit(category));
  }
}
