import { Component, OnInit } from '@angular/core';
import { Category } from '../games/game';
import { CategoryService } from '../categories/category.service';

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
