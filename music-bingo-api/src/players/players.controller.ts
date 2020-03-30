import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './player.entity';
import { RoomsService } from 'src/rooms/rooms.service';

class RoomPlayers {
  roomKey: string;
  playerNames: string[];
}

@Controller('players')
export class PlayersController {
  constructor(
    private readonly playersService: PlayersService,
    private readonly roomsService: RoomsService
  ) {}

  @Post()
  async create(@Body() roomPlayers: RoomPlayers): Promise<Player[]> {
    const players = await this.playersService.createPlayers(roomPlayers.playerNames);
    const room = await this.roomsService.addPlayersToRoom(roomPlayers.roomKey, players);
    return room.players;
  }
}
