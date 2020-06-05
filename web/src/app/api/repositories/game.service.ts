import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseRequestService } from '@api/base-request.service';
import { Game } from '@api/models/game';
import { Card } from '../models/card';
import { Clip } from '../models/clip';

@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseRequestService<Game> {
  protected path = '/games';

  getGameByKey(key: string): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/key/${key}`);
  }

  getGameCard(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}/${id}/card`);
  }

  getPlayList(id: number): Observable<Clip[]> {
    return this.http.get<Clip[]>(`${this.baseUrl}/${id}/play_list`);
  }
}
