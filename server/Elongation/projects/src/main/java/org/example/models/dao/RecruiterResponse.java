package org.example.models.dao;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import org.example.models.entities.Recruiter;
import org.example.models.entities.Team;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class RecruiterResponse {
    private UUID id;
    private String name;
    private List<UUID> teams;

    public RecruiterResponse() {
    }

    public RecruiterResponse(Recruiter recruiter){
        id = recruiter.getId();
        name = recruiter.getName();

        for(var team : recruiter.getTeams()){
            teams.add(team.getId());
        }
    }
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<UUID> getTeams() {
        return teams;
    }

    public void setTeams(List<UUID> teams) {
        this.teams = teams;
    }
}
