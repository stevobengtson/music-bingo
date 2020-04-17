import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Game]),
        RoomsModule
    ],
    controllers: [GamesController],
    providers: [GamesService],
    exports: [GamesService]
})
export class GamesModule {}
