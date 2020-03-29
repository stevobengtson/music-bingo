import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomService } from './room.service';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  create(@Body() room: Room): Promise<Room> {
    return this.roomService.createRoom(room);
  }

  @Get()
  findAll(@Query() query: FindPagedCriteria): Promise<Room[]> {
    return this.roomService.findRooms(query);
  }

  @Get(':key')
  findOne(@Param('key') key: string): Promise<Room> {
    return this.roomService.findRoom(key);
  }

  @Put(':key')
  update(@Param('key') key: string, @Body() updateRoom: Room): Promise<Room> {
    return this.roomService.updateRoom(key, updateRoom);
  }

  @Delete(':key')
  remove(@Param('key') key: string): Promise<any> {
    return this.roomService.removeRoom(key);
  }
}
