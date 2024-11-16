package org.example.services;

import org.example.models.entities.Candidate;
import org.example.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CandidateService {
    private final CandidateRepository candidateRepository;

    @Autowired
    public CandidateService(CandidateRepository candidateRepository){
        this.candidateRepository = candidateRepository;
    }

    public List<Candidate> getAll() {
        return candidateRepository.findAll();
    }

    public List<Candidate> getCandidatesByTeamId(UUID teamId) {
        return candidateRepository.findByTeams(teamId);
    }

    public Candidate getCandidateById(UUID id) {
        return candidateRepository.findById(id).orElse(null);
    }

    public Candidate saveCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    public void deleteProject(UUID id) {
        candidateRepository.deleteById(id);
    }
}
