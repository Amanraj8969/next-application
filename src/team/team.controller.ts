import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity'; // Import the Team entity
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Adjust the path

@Controller('teams')
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Post()
  createTeam(@Body() team: Team) { // Define team type as Team
    return this.teamService.createTeam(team);
  }

  @Get()
  getAllTeams() {
    return this.teamService.getTeams();
  }
}
