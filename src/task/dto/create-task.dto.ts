import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description?: string;  // Marking as optional

  @IsDateString()
  @IsNotEmpty()
  due_date?: string;  // Marking as optional

  @IsString()
  @IsOptional() // Assignee may or may not be provided
  assignee?: string;

  @IsString()
  @IsOptional() // Status may be optional if not provided
  status?: string;
}
