package org.example.models;

import org.example.models.entities.Candidate;
import org.example.models.entities.Team;

public record TaroSequence(TaroCard[] data, String candidateFullName, String teamName) {
    public TaroSequence(TaroCard[] data, String candidateFullName, String teamName) {
        this.data = data;
        this.candidateFullName = candidateFullName;
        this.teamName = teamName;
    }
}
