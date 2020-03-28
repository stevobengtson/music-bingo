export class Room {
    id: number;
    name: string;
    players: string[];
    key: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.key = Math.random().toString(36).substring(7);
    }
}
