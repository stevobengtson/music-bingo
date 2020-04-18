import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {
  currentRooms: Room[] = [];

  constructor(
    private readonly roomService: RoomService
  ) { }

  ngOnInit() {
    this.getCurrentRooms();
  }

  getCurrentRooms() {
    this.roomService.getMany().subscribe((rooms: Room[]) => {
      this.currentRooms = rooms;
    });
  }
}
