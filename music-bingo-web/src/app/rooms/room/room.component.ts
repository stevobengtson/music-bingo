import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Room } from '../room';
import { Player } from 'src/app/players/player';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: Room;
  players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private readonly gameService: GameService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRoom(params.key);
    });
  }

  getRoom(key: string) {
    this.gameService.loadRoom(key).subscribe((room: Room) => {
      console.log(room);
      this.room = room;
      this.players = room.players;
      this.updatePlayers(this.players);
    });
  }

  updatePlayers(players: Player[]) {
    this.gameService.players = players;
  }
}
