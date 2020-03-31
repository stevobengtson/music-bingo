import { Injectable } from '@angular/core';
import { Room } from '../rooms/room';
import { Player } from '../players/player';
import { RoomService } from '../rooms/room.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private currentRoom: Room;
  private currentPlayers: Player[];
  private isHost = false;

  constructor(
    private readonly roomService: RoomService
  ) { }

  set room(room: Room) {
    this.currentRoom = room;
  }

  set players(players: Player[]) {
    this.currentPlayers = players;
  }

  loadRoom(key: string): Observable<Room> {
    return new Observable((observer) => {
      this.roomService.get(key).subscribe((room: Room) => {
        this.room = room;
        this.players = room.players;

        observer.next(room);
        observer.complete();
      });
    });
  }
}
