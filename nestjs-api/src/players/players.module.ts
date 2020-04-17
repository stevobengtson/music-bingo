import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { Player } from './player.entity';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    RoomsModule
  ],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
