import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clip } from '@api/models/clip';
import { Observable } from 'rxjs';
import { BaseRequestService } from '@api/base-request.service';
import { AppConfigService } from '@services/app-config.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ClipService extends BaseRequestService<Clip> {
  protected path = '/clips';
  
  constructor(
    protected readonly http: HttpClient,
    protected readonly config: AppConfigService,
    private readonly categoryService: CategoryService
  ) { 
    super(http, config);
  }

  addOrUpdate(clip: Clip, categoryId: number): Observable<Clip> {
    if (clip.id && clip.id > 0) {
      return this.updateClip(clip);
    } else {
      return this.createClip(clip, categoryId);
    }
  }

  createClip(clip: Clip, categoryId: number): Observable<Clip> {
    return this.categoryService.createClip(clip, categoryId);
  }

  updateClip(clip: Clip): Observable<Clip> {
    return this.http.put<Clip>(`${this.baseUrl}/${clip.id}`, { clip });
  }

  delete(clip: Clip): Observable<Clip> {
    return this.http.delete<Clip>(`${this.baseUrl}/${clip.id}`);
  }
}
