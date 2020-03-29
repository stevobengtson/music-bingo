import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

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

  @BeforeInsert()
  generateKey() {
    if (!this.key) {
      this.key = Math.random().toString(36).substring(7);
    }
  }
}