
export class Clip {
    id?: number;
    name: string;
    artist: string;
    start: number;
    length: number;
    location?: string;
    isSelected?: boolean;
}

export class Card {
    b: Clip[];
    i: Clip[];
    n: Clip[];
    g: Clip[];
    o: Clip[];
}

export class Category {
    id?: number;
    name: string;
    clips: Clip[];
}

export class Game {
    id?: number;
    key?: string;
    name?: string;
    category: Category[];
}