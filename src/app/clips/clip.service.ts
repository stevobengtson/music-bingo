import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clip } from '../games/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipService {
  private readonly BASE_URL: string = 'http://localhost:3000/clips';
  private readonly CATEGORY_BASE_URL: string = 'http://localhost:3000/categories';

  constructor(private readonly http: HttpClient) { }

  addOrUpdate(clip: Clip, categoryId: number): Observable<Clip> {
    console.log(`Add or Edit a clip: ${clip.id}`);
    if (clip.id && clip.id > 0) {
      console.log('Edit a clip');
      return this.updateClip(clip);
    } else {
      console.log('Add a clip');
      return this.createClip(clip, categoryId);
    }
  }

  createClip(clip: Clip, categoryId: number): Observable<Clip> {
    return this.http.post<Clip>(`${this.CATEGORY_BASE_URL}/${categoryId}/clips`, { clip });
  }

  updateClip(clip: Clip): Observable<Clip> {
    return this.http.put<Clip>(`${this.BASE_URL}/${clip.id}`, { clip });
  }
}
