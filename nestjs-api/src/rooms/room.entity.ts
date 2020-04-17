import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Player } from 'src/players/player.entity';
import { Game } from 'src/games/game.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: ''})
  key: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(type => Player, player => player.rooms, {
    cascade: true
  })
  @JoinTable()
  players: Player[];

  @OneToMany(type => Game, game => game.room)
  games: Game[];

  @BeforeInsert()
  generateKey() {
    this.key = Math.random().toString(36).substring(7);
  }
}