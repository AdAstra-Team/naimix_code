package org.example.models.dao;

import org.example.models.entities.Candidate;
import org.example.models.entities.Team;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class TeamResponse {
    private UUID id;
    private String name;
    private ArrayList<Integer> signs;
    private List<CandidateResponse> candidates = new ArrayList<>();
    public TeamResponse(Team team) {
        this.id = team.getId();
        this.name = team.getName();
        this.signs = team.getSigns();
        this.candidates = team.getCandidates().stream()
                .map(CandidateResponse::new)
                .collect(Collectors.toList());
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

    public ArrayList<Integer> getSigns() {
        return signs;
    }

    public void setSigns(ArrayList<Integer> signs) {
        this.signs = signs;
    }

    public List<CandidateResponse> getCandidates() {
        return candidates;
    }

    public void setCandidates(List<CandidateResponse> candidates) {
        this.candidates = candidates;
    }
}
