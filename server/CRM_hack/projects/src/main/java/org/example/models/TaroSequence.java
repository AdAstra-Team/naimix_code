package org.example.models;

import org.example.models.entities.Candidate;
import org.example.models.entities.Team;

public record TaroSequence(TaroCard[] data, Candidate candidate, Team team) {
    public TaroSequence(TaroCard[] data, Candidate candidate, Team team) {
        this.data = data.clone();
        this.team = team;
        this.candidate = candidate;
    }
}
