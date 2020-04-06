import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Game } from "src/games/game.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Game, game => game.category)
    games: Game[];
}