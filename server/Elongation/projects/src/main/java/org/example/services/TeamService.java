package org.example.services;

import org.example.models.entities.Team;
import org.example.repositories.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TeamService {
    private TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team getTeamById(UUID id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team saveTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTask(UUID id) {
        teamRepository.deleteById(id);
    }
}
