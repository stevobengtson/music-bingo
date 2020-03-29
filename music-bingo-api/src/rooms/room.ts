export class Room {
  id: number;
  name: string;
  key: string;
  isActive: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.key = Math.random().toString(36).substring(7);
    this.isActive = true;
  }
}

export class UpdateRoom {
  name: string;
}
