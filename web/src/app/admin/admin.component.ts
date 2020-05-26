import { Component, OnInit } from '@angular/core';
import { Category } from '../api/models/game';
import { CategoryService } from '../api/repositories/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  categories: Category[];

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  onCategoryCreated(category: Category) {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getMany().subscribe((categories: Category[]) => this.categories = categories);
  }

}
