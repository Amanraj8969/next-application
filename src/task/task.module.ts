import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]), // Register Task entity here
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
