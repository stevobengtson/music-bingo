import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomsService } from './rooms.service';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';
import { UpdateResult } from 'typeorm';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() room: Room): Promise<Room> {
    return this.roomsService.createRoom(room);
  }

  @Get()
  findAll(@Query() query: FindPagedCriteria): Promise<Room[]> {
    return this.roomsService.findRooms(query);
  }

  @Get(':key')
  findOne(@Param('key') key: string): Promise<Room> {
    return this.roomsService.findRoom(key);
  }
}
