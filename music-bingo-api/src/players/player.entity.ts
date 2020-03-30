import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Room } from 'src/rooms/room.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Room, room => room.players)
  rooms: Room[];
}
