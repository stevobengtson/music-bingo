import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Game, Clip } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly BASE_URL = 'http://localhost:3000/games'

  constructor(
    private readonly http: HttpClient
  ) { }

  getMany(page: number = 0, limit: number = 10): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.BASE_URL}?page=${page}&limit=${limit}`);
  }

  getGameByKey(key: string): Observable<Game> {
    return this.http.get<Game>(`${this.BASE_URL}/key/${key}`);
  }

  getGameCard(id: number): Observable<Clip[]> {
    return this.http.get<Clip[]>(`${this.BASE_URL}/${id}/card`);
  }

  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
