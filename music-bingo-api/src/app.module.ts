import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsController } from './rooms/rooms.controller';
import { RoomService } from './rooms/room/room.service';

@Module({
  imports: [],
  controllers: [AppController, RoomsController],
  providers: [AppService, RoomService],
})
export class AppModule {}
