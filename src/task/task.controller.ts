import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';  // Ensure CreateTaskDto is imported
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Import the JWT Guard

@Controller('tasks')
@UseGuards(JwtAuthGuard)  // Apply the JWT guard to all routes in this controller
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Patch(':id/assign')
  assignTask(@Param('id') taskId: string, @Body('assignee') assignee: string) {
    return this.taskService.assignTask(taskId, assignee);  // Ensure the method is completed
  }

  @Patch(':id/status')
  updateTaskStatus(@Param('id') taskId: string, @Body('status') status: string) {
    return this.taskService.updateTaskStatus(taskId, status);
  }
}
