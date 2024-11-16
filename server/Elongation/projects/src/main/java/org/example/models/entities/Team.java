package org.example.models.entities;

import jakarta.persistence.*;
import org.example.models.dao.TeamRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private Integer destiny;
    private ArrayList<Integer> signs;

    @ManyToMany
    @JoinTable(
            name = "team_candidate",
            joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "candidate_id")
    )
    private List<Candidate> candidates = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "recruiter_id", nullable = false)
    private Recruiter recruiter;

    public Team() {
    }

    public Team(TeamRequest team) {
        this.name = team.getName();
        this.signs = team.getSigns();
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

    public Integer getDestiny() {
        return destiny;
    }

    public void setDestiny(Integer destiny) {
        this.destiny = destiny;
    }

    public ArrayList<Integer> getSigns() {
        return signs;
    }

    public void setSigns(ArrayList<Integer> signs) {
        this.signs = signs;
    }

    public List<Candidate> getCandidates() {
        return candidates;
    }

    public void setCandidates(List<Candidate> candidates) {
        this.candidates = candidates;
    }

    public Recruiter getRecruiter() {
        return recruiter;
    }

    public void setRecruiter(Recruiter recruiter) {
        this.recruiter = recruiter;
    }
}
