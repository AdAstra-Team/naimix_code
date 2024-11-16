package org.example.services;

import org.example.models.entities.Candidate;
import org.example.models.entities.Recruiter;
import org.example.repositories.CandidateRepository;
import org.example.repositories.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RecruiterService {
    private final RecruiterRepository recruiterRepository;

    @Autowired
    public RecruiterService(RecruiterRepository recruiterRepository){
        this.recruiterRepository = recruiterRepository;
    }

    public List<Recruiter> getAll() {
        return recruiterRepository.findAll();
    }

    public Recruiter getRecruiterById(UUID id) {
        return recruiterRepository.findById(id).orElse(null);
    }


    public Recruiter getRecruiterByName(String name) {
        return recruiterRepository.findByName(name);
    }

    public Recruiter saveRecruiter(Recruiter candidate) {
        return recruiterRepository.save(candidate);
    }

    public void deleteProject(UUID id) {
        recruiterRepository.deleteById(id);
    }
}
