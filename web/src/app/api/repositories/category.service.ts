import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Clip } from '../models/game';
import { BaseRequestService } from '@api/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseRequestService {
  protected path = '/categories';

  getMany(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}?start=0&limit=100`);
  }

  createCategory(categoryName: string): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}`, { category: { name: categoryName } });
  }

  getClips(categoryId: number, page: number = 1, pageSize: number = 10) : Observable<HttpResponse<Clip[]>> {
    return this.http.get<Clip[]>(`${this.baseUrl}/${categoryId}/clips?page=${page}&limit=${pageSize}`, {observe: 'response'});
  }

  createClip(clip: Clip, categoryId: number): Observable<Clip> {
    return this.http.post<Clip>(`${this.baseUrl}/${categoryId}/clips`, { clip });
  }  
}
