package org.example.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.example.models.dao.*;
import org.example.models.entities.Candidate;
import org.example.models.entities.Recruiter;
import org.example.services.AuthService;
import org.example.services.CandidateService;
import org.example.services.DestinyComputeService;
import org.example.services.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/recruiter")
public class RecruiterController {
    private final RecruiterService recruiterService;
    private final AuthService authService;

    @Autowired
    public RecruiterController(RecruiterService recruiterService,
                               AuthService authService){
        this.recruiterService = recruiterService;
        this.authService = authService;
    }

    @GetMapping("/{id}")
    public RecruiterResponse getRecruiterById(@RequestHeader("MyAuthorization") String authorizationHeader, @PathVariable UUID id) {
        System.out.println(authService.GetRecruiterInfo(authorizationHeader).getName());
        return new RecruiterResponse(recruiterService.getRecruiterById(id));
    }

    @PostMapping("/registration")
    public RegistrationResponse addRecruiter(@RequestBody RecruiterRequest recruiterRequest) {
        var recruiter = new Recruiter(recruiterRequest);
        var model = recruiterService.saveRecruiter(recruiter);
        return new RegistrationResponse(model, authService.GenerateJwtToken(model));
    }

    @PostMapping("/auth")
    public AuthResponse auth(@RequestBody RecruiterRequest recruiterRequest) {
        var model = recruiterService.getRecruiterByName(recruiterRequest.getName());
        var auth = new AuthResponse();
        auth.setAccessToken(authService.GenerateJwtToken(model));
        return auth;
    }

    @PutMapping
    public RecruiterResponse updateRecruiter(@RequestBody RecruiterRequest recruiterRequest) {
        return new RecruiterResponse(recruiterService.updateRecruiter(new Recruiter(recruiterRequest)));
    }
}
