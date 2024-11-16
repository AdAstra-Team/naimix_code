package org.example.controllers;

import jakarta.persistence.EntityNotFoundException;
import org.example.models.TaroCard;
import org.example.models.TaroSequence;
import org.example.models.entities.Candidate;
import org.example.models.entities.Project;
import org.example.models.entities.Team;
import org.example.repositories.CandidateRepository;
import org.example.repositories.TeamRepository;
import org.example.services.TaroService;
import org.keycloak.authorization.client.resource.PolicyResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/taro")
public class TaroController {
    private final TaroService taroService;
    private final TeamRepository teamRepository;
    private final CandidateRepository candidateRepository;

    @Autowired
    public TaroController(TaroService taroService, TeamRepository teamRepository, CandidateRepository candidateRepository){
        this.taroService = taroService;
        this.teamRepository = teamRepository;
        this.candidateRepository = candidateRepository;
    }

    @GetMapping
    public List<TaroCard> getAllCards() {
        return taroService.getAllCards();
    }

    @PostMapping("/sequence")
    public TaroSequence createSequence(
            @RequestParam UUID candidateId,
            @RequestParam UUID teamId,
            @RequestParam int length
    ) {
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new EntityNotFoundException("Team not found with id: " + teamId));
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new EntityNotFoundException("Candidate not found with id: " + candidateId));
        return taroService.createSequence(candidate, team, length);
    }
}