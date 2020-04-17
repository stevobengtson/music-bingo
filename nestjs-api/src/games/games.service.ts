import { Injectable } from '@nestjs/common';
import { Room } from 'src/rooms/room.entity';
import { Game } from './game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export enum GameState {
    NONE,
    STARTED,
    COMPLETED
}

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private gameRepository: Repository<Game>
    ) { }

    createGame(room: Room, game: Game): Promise<Game> {
        game.room = room;
        game.state = GameState.STARTED;
        const newGame = this.gameRepository.create(game);
        return this.gameRepository.save(newGame);
    }
}
