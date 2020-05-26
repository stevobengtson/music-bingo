import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Game, Card } from '../models/game';
import { BaseRequestService } from '../base-request.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseRequestService {
  protected path = '/games';

  createGame(gameName: string, categoryId: number): Observable<Game> {
    return this.http.post<Game>(`${this.baseUrl}`, { game: { name: gameName, category_id: categoryId } });
  }

  getMany(page: number = 1, limit: number = 10): Observable<HttpResponse<Game[]>> {
    return this.http.get<Game[]>(`${this.baseUrl}?page=${page}&limit=${limit}`, {observe: 'response'});
  }

  getGameByKey(key: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/key/${key}`);
  }

  getGameCard(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}/${id}/card`);
  }
}
