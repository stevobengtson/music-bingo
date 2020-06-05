import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Room } from '@app/api/models/room';
import { RoomService } from '@app/api/repositories/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;  
  roomList: Room[];

  page: number = 1;
  pageSize: number = 10;
  total: number = 0;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRoomList();
  }

  getRoomList() {
    console.log('Calling roomService');
    this.blockUI.start('Refreshing...');
    this.roomService
        .getMany(this.page, this.pageSize)
        .subscribe(
          (response: HttpResponse<Room[]>) => {
            this.total = parseInt(response.headers.get('Total'));
            this.roomList = response.body;
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );
  }
}
