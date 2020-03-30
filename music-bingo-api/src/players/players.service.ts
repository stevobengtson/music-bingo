import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Room } from 'src/rooms/room.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>
  ) {}

  createPlayer(player: Player): Promise<Player> {
    const newPlayer = this.playersRepository.create(player);
    return this.playersRepository.save(newPlayer);
  }

  removePlayer(id: number): Promise<DeleteResult> {
    return this.playersRepository.delete(id);
  }
}
