import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @ObjectIdColumn()
  id?: string; // Mark as optional

  @Column()
  description?: string; // Mark as optional

  @Column()
  due_date?: Date; // Mark as optional

  @Column()
  assignee?: string; // Mark as optional

  @Column()
  status?: string; // Mark as optional
}
