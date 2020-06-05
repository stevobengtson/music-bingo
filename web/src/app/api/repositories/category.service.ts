import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '@api/models/category';
import { Clip } from '@api/models/clip';
import { BaseRequestService } from '@api/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseRequestService<Category> {
  protected path = '/categories';

  getClips(categoryId: number, page: number = 1, pageSize: number = 10) : Observable<HttpResponse<Clip[]>> {
    return this.http.get<Clip[]>(`${this.baseUrl}/${categoryId}/clips?page=${page}&limit=${pageSize}`, {observe: 'response'});
  }

  createClip(clip: Clip, categoryId: number): Observable<Clip> {
    return this.http.post<Clip>(`${this.baseUrl}/${categoryId}/clips`, { clip });
  }
}
