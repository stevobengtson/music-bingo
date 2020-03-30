import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from './room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly baseUrl: string = 'http://localhost:3000/rooms';
  constructor(private readonly http: HttpClient) { }

  createRoom(name: string): Observable<Room> {
    return this.http.post<Room>(this.baseUrl, { name });
  }

  getMany(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}?start=0&limit=10`);
  }

  get(key: string): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${key}`);
  }
}
