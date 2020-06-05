import { Injectable } from '@angular/core';
import { BaseRequestService } from '@api/base-request.service';
import { Room } from '@api/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseRequestService<Room> {
  protected path = '/rooms';
}
