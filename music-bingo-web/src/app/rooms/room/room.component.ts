import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../room.service';
import { Room } from '../room';
import { Player } from 'src/app/players/player';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {
  room: Room;
  players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private readonly roomService: RoomService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRoom(params.key);
    });
  }

  getRoom(key: string) {
    this.roomService.get(key).subscribe((room: Room) => {
      this.room = room;
    });
  }

  updatePlayers(players: Player[]) {
    this.players = players;
  }
}
