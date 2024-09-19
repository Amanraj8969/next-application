import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) // Inject the Team repository
    private teamRepository: MongoRepository<Team>,
  ) {}

  createTeam(team: Partial<Team>) {
    const newTeam = this.teamRepository.create(team);
    return this.teamRepository.save(newTeam);
  }

  getTeams() {
    return this.teamRepository.find();
  }
}
