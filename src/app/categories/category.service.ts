import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category } from '../games/game';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly baseUrl: string = 'http://localhost:3000/categories';

  constructor(private readonly http: HttpClient) { }

  getMany(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}?start=0&limit=100`);
  }

  createCategory(categoryName: string): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}`, { category: { name: categoryName } });
  }
}
