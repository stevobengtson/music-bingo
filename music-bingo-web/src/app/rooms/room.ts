import { Player } from '../players/player';

export class Room {
    id?: number;
    name: string;
    key: string;
    players: Player[];
}
