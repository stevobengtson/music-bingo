import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private nextId = 1;
  rooms: Room[] = [];

  constructor() { }

  createRoom(name: string): Observable<Room> {
    return new Observable((observer) => {
      let newRoom: Room = this.rooms.find((room: Room) => room.name == name);
      if (!newRoom) {
        newRoom = new Room(this.nextId++, name)
        this.rooms.push(newRoom);
      }
  
      observer.next(newRoom);
    });
  }
}
