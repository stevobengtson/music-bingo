import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly baseUrl: string = 'http://localhost:3000/players';

  constructor(private readonly http: HttpClient) { }

  createPlayer(name: string): Observable<Player> {
    return this.http.post<Player>(this.baseUrl, { name })
  }
}
