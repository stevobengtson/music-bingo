import { Component, OnInit } from '@angular/core';
import { Category } from '@api/models/category';
import { CategoryService } from '@api/repositories/category.service';
import { ToastService } from '@app/services/toast.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  onCategoryCreated(category: Category) {
    this.toastService.success(`Created Category: ${category.name}`);
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService
        .getMany()
        .subscribe((response: HttpResponse<Category[]>) => {
          return this.categories = response.body;
        });
  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category).subscribe(
      () => {
        this.toastService.success(`Deleted category ${category.name}`);
        this.getCategoryList();
      },
      (error) => this.toastService.error(error)
    );
  }
}
