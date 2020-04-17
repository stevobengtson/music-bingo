import { Controller, Post, Param, Body } from '@nestjs/common';
import { Game } from './game.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(
        private readonly gameService: GamesService,
        private readonly roomService: RoomsService
    ) {}

    @Post()
    async create(@Body() game: Game): Promise<Game> {
        const room = await this.roomService.findRoom(game.room.key);
        return this.gameService.createGame(room, game);
    }
}
