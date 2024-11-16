package org.example.controllers;

import org.example.models.dao.TeamRequest;
import org.example.models.dao.TeamResponse;
import org.example.models.entities.Task;
import org.example.models.entities.Team;
import org.example.services.TaskService;
import org.example.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping
    public List<Team> getAllTasks() {
        return teamService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable UUID id) {
        return teamService.getTeamById(id);
    }

    @PostMapping
    public TeamResponse createTeam(@RequestBody TeamRequest team) {
        return teamService.saveTeam(team);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable UUID id) {
        teamService.deleteTask(id);
    }
}
