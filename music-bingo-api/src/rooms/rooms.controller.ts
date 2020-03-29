import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { Room, UpdateRoom } from './room';
import { RoomService } from './room/room.service';
import { Observable } from 'rxjs';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  create(@Body() room: Room): Observable<Room> {
    return this.roomService.createRoom(room.name);
  }

  @Get()
  findAll(@Query() query: FindPagedCriteria): Observable<Room[]> {
    return this.roomService.findRooms(query);
  }

  @Get(':key')
  findOne(@Param('key') key: string): Observable<Room> {
    return this.roomService.findRoom(key);
  }

  @Put(':key')
  update(@Param('key') key: string, @Body() updateRoom: UpdateRoom): Observable<Room> {
    return this.roomService.updateRoom(key, updateRoom);
  }

  @Delete(':key')
  remove(@Param('key') key: string): Observable<void> {
    return this.roomService.removeRoom(key);
  }
}
