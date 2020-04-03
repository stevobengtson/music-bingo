import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Room } from "src/rooms/room.entity";


@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: number;

    @ManyToOne(type => Room, room => room.games, { cascade: true})
    room: Room;
}