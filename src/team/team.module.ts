import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team]), // Register Team entity here
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
