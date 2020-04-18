import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Room } from '../room';
import { Player } from 'src/app/players/player';
import { GameService } from 'src/app/games/game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: Room;
  players: Player[] = [];
  isHost = false;

  constructor(
    private route: ActivatedRoute,
    private readonly gameService: GameService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!this.gameService.room.value || this.gameService.room.value.key !== params.key) {
        this.getRoom(params.key);
      }
    });

    this.gameService.room.subscribe((room: Room) => this.room = room);
    this.gameService.hosting.subscribe((host: boolean) => this.isHost = host);
    this.gameService.localPlayers.subscribe((players: Player[]) => this.players = players);
  }

  getRoom(key: string) {
    this.gameService.loadRoom(key);
  }

  updatePlayers(players: Player[]) {
    this.gameService.setLocalPlayers(players);
  }
}
