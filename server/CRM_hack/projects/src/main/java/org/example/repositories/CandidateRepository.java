package org.example.repositories;

import org.example.models.entities.Candidate;
import org.example.models.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CandidateRepository  extends JpaRepository<Candidate, UUID> {
}
