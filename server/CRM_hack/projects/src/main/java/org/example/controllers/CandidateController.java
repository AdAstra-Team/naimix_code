package org.example.controllers;

import org.example.models.dao.CandidateRequest;
import org.example.models.dao.CandidateResponse;
import org.example.models.entities.Candidate;
import org.example.services.CandidateService;
import org.example.services.DestinyComputeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/candidate")
public class CandidateController {
    private final CandidateService candidateService;
    private final DestinyComputeService destinyComputeService;

    @Autowired
    public CandidateController(CandidateService candidateService, DestinyComputeService destinyComputeService){
        this.candidateService = candidateService;
        this.destinyComputeService = destinyComputeService;
    }

    @GetMapping("/{id}")
    public CandidateResponse getCandidateById(@PathVariable UUID id) {
        return new CandidateResponse(candidateService.getCandidateById(id));
    }

    @PostMapping
    public CandidateResponse createCandidate(@RequestBody CandidateRequest candidateRequest) {
        var destiny = destinyComputeService.getDestinyByType(candidateRequest.getTypeOfDestinyCompute(),candidateRequest);
        var t = new Candidate(candidateRequest,destiny);
        var y = candidateService.saveCandidate(t);
        return new CandidateResponse(y);
    }
}
