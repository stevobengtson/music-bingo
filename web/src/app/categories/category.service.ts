import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category, Clip } from '../games/game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly baseUrl: string = `${environment.api_url}/categories`;

  constructor(private readonly http: HttpClient) { }

  getMany(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}?start=0&limit=100`);
  }

  createCategory(categoryName: string): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}`, { category: { name: categoryName } });
  }

  getClips(categoryId: number, page: number = 1, pageSize: number = 10) : Observable<HttpResponse<Clip[]>> {
    return this.http.get<Clip[]>(`${this.baseUrl}/${categoryId}/clips?page=${page}&limit=${pageSize}`, {observe: 'response'});
  }
}