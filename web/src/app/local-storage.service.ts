import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Card, Clip } from '@api/models/game';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  set playerCard(card: Card) {
    this.storage.set('player-card', card);
  }

  get playerCard(): Card {
    return this.storage.get('player-card');
  }

  setGamePlayList(gameId: number, clips: Clip[]) {
    this.storage.set(`game-playlist-${gameId}`, clips);
  }

  getGamePlayList(gameId: number): Clip[] {
    return this.storage.get(`game-playlist-${gameId}`);
  }
}
