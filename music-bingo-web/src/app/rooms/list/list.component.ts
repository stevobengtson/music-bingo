import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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
