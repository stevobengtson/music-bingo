import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './player.entity';
import { DeleteResult } from 'typeorm';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() player: Player): Promise<Player> {
    return this.playersService.createPlayer(player);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.playersService.removePlayer(id);
  }
}
