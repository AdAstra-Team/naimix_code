package org.example.services;

import org.example.models.entities.Recruiter;
import org.example.repositories.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AuthService {
    RecruiterRepository recruiterRepository;

    @Autowired
    public AuthService(RecruiterRepository recruiterRepository){
        this.recruiterRepository = recruiterRepository;
    }

    public Recruiter GetRecruiterInfo(String token){
        var t = UUID.fromString(GetNameByToken(token.substring(7)));
        return recruiterRepository.findById(t).get();
    }

    private String GetNameByToken(String token){
        String[] parts = token.split("\\$");
        return parts[0];
    }

    public String GenerateJwtToken(Recruiter recruiter){
        return recruiter.getId() + "$" + recruiter.getName();
    }
}
