import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, InsertResult } from 'typeorm';
import { Room } from './room.entity';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';

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

  updateRoom(key: string, updateRoom: Room): Promise<Room> {
    return this.roomsRepository.findOneOrFail({ key }).then((existingRoom: Room) => {
      const updatedRoom = this.roomsRepository.merge(existingRoom, updateRoom);
      return this.roomsRepository.save(updatedRoom);
    });
  }

  removeRoom(key: string): Promise<UpdateResult> {
    return this.roomsRepository.softDelete(key);
  }
}
