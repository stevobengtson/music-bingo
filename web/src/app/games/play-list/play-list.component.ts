import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from '@api/repositories/game.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Clip } from '@api/models/clip';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {
  gameId: number;
  playList: Clip[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService,
    private readonly localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.gameId = parseInt(params.id);
      this.playList = this.localStorage.getGamePlayList(this.gameId);
      if (!this.playList || this.playList.length == 0) {
        this.getPlayList();
      }
    });
  }

  getPlayList() {
    if (!this.gameId) {
      return;
    }

    this.gameService.getPlayList(this.gameId).subscribe((clips: Clip[]) => {
      this.playList = clips;
      this.onClipPlayed();
    });
  }

  onClipPlayed() {
    this.localStorage.setGamePlayList(this.gameId, this.playList);
  }
}
