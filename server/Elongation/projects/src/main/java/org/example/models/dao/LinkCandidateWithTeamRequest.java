package org.example.models.dao;

import java.util.UUID;

public class LinkCandidateWithTeamRequest {
    private UUID candidateId;
    private UUID teamId;

    public UUID getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(UUID candidateId) {
        this.candidateId = candidateId;
    }

    public UUID getTeamId() {
        return teamId;
    }

    public void setTeamId(UUID teamId) {
        this.teamId = teamId;
    }
}
