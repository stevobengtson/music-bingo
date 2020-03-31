import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from '../room';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name = '';

  constructor(
    private readonly router: Router,
    private readonly roomService: RoomService
  ) {}

  onSubmit() {
    this.roomService.createRoom(this.name).subscribe((room: Room) => {
      this.router.navigate(['/', room.key]);
    });
  }
}
