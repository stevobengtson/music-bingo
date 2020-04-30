import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game, Card } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly BASE_URL = `${environment.api_url}/games`;

  constructor(
    private readonly http: HttpClient
  ) { }

  createGame(gameName: string, categoryId: number): Observable<Game> {
    return this.http.post<Game>(`${this.BASE_URL}`, { game: { name: gameName, category_id: categoryId } });
  }

  getMany(page: number = 1, limit: number = 10): Observable<HttpResponse<Game[]>> {
    return this.http.get<Game[]>(`${this.BASE_URL}?page=${page}&limit=${limit}`, {observe: 'response'});
  }

  getGameByKey(key: string): Observable<Game> {
    return this.http.get<Game>(`${this.BASE_URL}/key/${key}`);
  }

  getGameCard(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.BASE_URL}/${id}/card`);
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
