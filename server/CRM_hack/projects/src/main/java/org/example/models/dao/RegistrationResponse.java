package org.example.models.dao;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.example.models.entities.Recruiter;

import java.util.UUID;

public class RegistrationResponse {
    private UUID id;
    private String name;

    @JsonProperty("access_token")
    private String jwtToken;

    public RegistrationResponse() {
    }

    public RegistrationResponse(Recruiter recruiter, String jwtToken) {
        id = recruiter.getId();
        name = recruiter.getName();
        this.jwtToken = jwtToken;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
