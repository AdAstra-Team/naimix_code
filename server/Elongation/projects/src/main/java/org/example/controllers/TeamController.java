package org.example.controllers;

import org.example.models.dao.CandidateResponse;
import org.example.models.dao.TeamRequest;
import org.example.models.dao.TeamResponse;
import org.example.models.entities.Team;
import org.example.services.RecruiterService;
import org.example.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/teams")
public class TeamController {

    private TeamService teamService;
    private RecruiterService recruiterService;

    @Autowired
    public TeamController(TeamService teamService, RecruiterService recruiterService) {
        this.teamService = teamService;
        this.recruiterService = recruiterService;
    }

    @GetMapping
    public List<TeamResponse> getAllTeams() {
        return teamService.getAllTeams().stream()
                .map(TeamResponse::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public TeamResponse getTeamById(@PathVariable UUID id) {
        return new TeamResponse(teamService.getTeamById(id));
    }

    @PostMapping
    public TeamResponse createTeam(@RequestBody TeamRequest teamRequest) {
        var team = new Team(teamRequest);
        var recruiter = recruiterService.getRecruiterById(teamRequest.getRecruiterId());
        team.setRecruiter(recruiter);
        return new TeamResponse(teamService.saveTeam(team));
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable UUID id) {
        teamService.deleteTask(id);
    }
}
