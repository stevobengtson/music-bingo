import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import { Player } from 'src/players/player.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(type => Player)
  @JoinTable()
  players: Player[];

  @BeforeInsert()
  generateKey() {
    if (!this.key) {
      this.key = Math.random().toString(36).substring(7);
    }
  }
}