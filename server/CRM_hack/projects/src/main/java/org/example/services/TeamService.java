package org.example.services;

import org.example.models.dao.TeamRequest;
import org.example.models.dao.TeamResponse;
import org.example.models.entities.Team;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TeamService {
    public List<Team> getAllTasks() {
        return null;
    }

    public Team getTeamById(UUID id) {
        return null;
    }

    public TeamResponse saveTeam(TeamRequest team) {
        return null;
    }

    public void deleteTask(UUID id) {
    }
}
