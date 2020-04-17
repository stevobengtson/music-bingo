
export class Clip {
    id?: number;
    name: string;
    artist: string;
    start: number;
    length: number;
    location?: string;
}

export class Category {
    id?: number;
    name: string;
    clips: Clip[];
}

export class Game {
    id?: number;
    key?: string;
    category: Category[];
}