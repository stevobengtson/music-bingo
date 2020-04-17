import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>
  ) {}

  createPlayers(playerNames: string[]): Promise<Player[]> {
    const newPlayers: Player[] = [];
    playerNames.forEach(async (playerName: string) => {
      let newPlayer = await this.playersRepository.findOne({ name: playerName });
      if (!newPlayer) {
        newPlayer = this.playersRepository.create({ name: playerName, rooms: [] });
      }
      newPlayers.push(newPlayer);
    });
    return this.playersRepository.save(newPlayers);
  }
}
