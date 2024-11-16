package org.example.controllers;

import org.example.models.dao.CandidateRequest;
import org.example.models.dao.CandidateResponse;
import org.example.models.entities.Candidate;
import org.example.services.AuthService;
import org.example.services.CandidateService;
import org.example.services.DestinyComputeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/candidate")
public class CandidateController {
    private final CandidateService candidateService;
    private final DestinyComputeService destinyComputeService;
    private final AuthService authService;

    @Autowired
    public CandidateController(CandidateService candidateService,
                               DestinyComputeService destinyComputeService,
                               AuthService authService){
        this.candidateService = candidateService;
        this.destinyComputeService = destinyComputeService;
        this.authService = authService;
    }

    @GetMapping("/{id}")
    public CandidateResponse getCandidateById(@PathVariable UUID id) {
        return new CandidateResponse(candidateService.getCandidateById(id));
    }

    @GetMapping("/{teamId}")
    public List<CandidateResponse> getCandidatesByTeamId(@PathVariable UUID teamId) {
        return candidateService.getCandidatesByTeamId(teamId).stream()
                .map(CandidateResponse::new)
                .collect(Collectors.toList());
        // TODO: sort cumdidates
    }

    @PostMapping()
    public CandidateResponse addCandidate(@RequestBody CandidateRequest candidateRequest) {
        var destiny = destinyComputeService.getDestinyByType(candidateRequest.getTypeOfDestinyCompute(),candidateRequest);
        var t = new Candidate(candidateRequest,destiny);
        var y = candidateService.saveCandidate(t);
        return new CandidateResponse(y);
    }
}