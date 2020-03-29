import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Room, UpdateRoom } from '../room';
import { Observable } from 'rxjs';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';

@Injectable()
export class RoomService {
  private nextId = 21;
  rooms: Room[] = [
    new Room(1, 'Test 1'),
    new Room(2, 'Test 2'),
    new Room(3, 'Test 3'),
    new Room(4, 'Test 4'),
    new Room(5, 'Test 5'),
    new Room(6, 'Test 6'),
    new Room(7, 'Test 7'),
    new Room(8, 'Test 8'),
    new Room(9, 'Test 9'),
    new Room(10, 'Test 10'),
    new Room(11, 'Test 11'),
    new Room(12, 'Test 12'),
    new Room(13, 'Test 13'),
    new Room(14, 'Test 14'),
    new Room(15, 'Test 15'),
    new Room(16, 'Test 16'),
    new Room(17, 'Test 17'),
    new Room(18, 'Test 18'),
    new Room(19, 'Test 19'),
    new Room(20, 'Test 20')
  ];

  constructor() {}

  createRoom(name: string): Observable<Room> {
    return new Observable((observer) => {
      let newRoom: Room = this.rooms.find((room: Room) => room.name == name);
      if (newRoom) {
        throw new BadRequestException();
      }

      newRoom = new Room(this.nextId++, name)
      this.rooms.push(newRoom);      
      observer.next(newRoom);
      observer.complete();
    });
  }

  findRooms(query: FindPagedCriteria): Observable<Room[]> {
    return new Observable((observer) => {
      observer.next(this.rooms.slice(query.start, query.start + query.limit));
      observer.complete();
    });
  }

  findRoom(key: string): Observable<Room> {
    return new Observable((observer) => {
      const room = this.findRoomByKey(key);
      observer.next(room);
      observer.complete();
    });
  }

  updateRoom(key: string, updateRoom: UpdateRoom): Observable<Room> {
    return new Observable((observer) => {
      const room = this.findRoomByKey(key);
      room.name = updateRoom.name;
      observer.next(room);
      observer.complete();
    });
  }

  removeRoom(key: string): Observable<void> {
    return new Observable((observer) => {
      const index = this.rooms.findIndex((room: Room) => room.key == key);
      if (index == -1) {
        throw new NotFoundException();
      }
      this.rooms.splice(index, 1);
      observer.next();
      observer.complete();
    });
  }

  private findRoomByKey(key: string): Room {
    const room = this.rooms.find((room: Room) => room.key == key);
    if (!room) {
      throw new NotFoundException();
    }

    return room;
  }
}
