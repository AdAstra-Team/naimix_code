package org.example.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.UUID;

@Entity
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private Integer destiny;
    private ArrayList<Integer> signs;

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

    public Integer getDestiny() {
        return destiny;
    }

    public void setDestiny(Integer destiny) {
        this.destiny = destiny;
    }

    public ArrayList<Integer> getSigns() {
        return signs;
    }

    public void setSigns(ArrayList<Integer> signs) {
        this.signs = signs;
    }
}

