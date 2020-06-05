import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Card } from '@api/models/card';
import { Clip } from '@app/api/models/clip';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}


  setPlayerCard(card: Card, gameId: number) {
    this.storage.set(`player-card-${gameId}`, card);
  }

  getPlayerCard(gameId: number): Card {
    return this.storage.get(`player-card-${gameId}`);
  }

  setGamePlayList(gameId: number, clips: Clip[]) {
    this.storage.set(`game-playlist-${gameId}`, clips);
  }

  getGamePlayList(gameId: number): Clip[] {
    return this.storage.get(`game-playlist-${gameId}`);
  }
}
