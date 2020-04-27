import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipService {
  private readonly baseUrl: string = 'http://localhost:3000/clips';

  constructor(private readonly http: HttpClient) { }
}
