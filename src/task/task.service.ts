import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      due_date: createTaskDto.due_date ? new Date(createTaskDto.due_date) : undefined,  // Convert string to Date
    });
    return this.taskRepository.save(task);
  }

  async assignTask(taskId: string, assignee: string): Promise<any> {
    return this.taskRepository.update(taskId, { assignee });
  }

  async updateTaskStatus(taskId: string, status: string): Promise<any> {
    return this.taskRepository.update(taskId, { status });
  }
}
