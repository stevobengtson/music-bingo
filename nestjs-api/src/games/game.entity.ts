import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Room } from "src/rooms/room.entity";
import { Category } from "src/categories/category.entity";


@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: number;

    @ManyToOne(type => Room, room => room.games, { cascade: true})
    room: Room;

    @ManyToOne(type => Category, category => category.games, { cascade: true })
    category: Category;
}