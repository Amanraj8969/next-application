import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('teams')
export class Team {
  @ObjectIdColumn()
  id?: string; // Mark as optional

  @Column()
  name?: string; // Mark as optional

  @Column()
  members?: string[]; // Mark as optional
}
