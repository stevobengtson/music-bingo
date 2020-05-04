import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Card } from './games/game';

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
}
