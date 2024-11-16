package org.example.repositories;

import org.example.models.entities.Project;
import org.example.models.entities.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RecruiterRepository  extends JpaRepository<Recruiter, UUID> {
}
