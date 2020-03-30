import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';
import { Player } from 'src/players/player.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>
  ) {}

  createRoom(room: Room): Promise<Room> {
    const newRoom = this.roomsRepository.create(room);
    return this.roomsRepository.save(newRoom);
  }

  findRooms(query: FindPagedCriteria): Promise<Room[]> {
    return this.roomsRepository.find({ where: { isActive: true }, take: query.limit, skip: query.start });
  }

  findRoom(key: string): Promise<Room> {
    return this.roomsRepository.findOneOrFail({ key });
  }

  async addPlayersToRoom(key: string, players: Player[]): Promise<Room> {
    const room = await this.roomsRepository.findOneOrFail({ key });
    if (!room.players) {
      room.players = [];
    }
    room.players = [...room.players, ...players];
    return this.roomsRepository.save(room);
  }
}
