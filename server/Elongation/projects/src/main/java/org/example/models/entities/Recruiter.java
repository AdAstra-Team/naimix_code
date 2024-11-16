package org.example.models.entities;

import jakarta.persistence.*;
import org.example.models.dao.RecruiterRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String passwordHash;

    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Team> teams = new ArrayList<>();

    public Recruiter() {
    }

    public Recruiter(RecruiterRequest recruiterRequest) {
        name = recruiterRequest.getName();
        passwordHash = recruiterRequest.getPasswordHash();
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

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
