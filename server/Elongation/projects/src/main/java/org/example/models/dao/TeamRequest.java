package org.example.models.dao;

import java.util.ArrayList;
import java.util.UUID;

public class TeamRequest {
    private String name;
    private ArrayList<Integer> signs;
    private UUID recruiterId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Integer> getSigns() {
        return signs;
    }

    public void setSigns(ArrayList<Integer> signs) {
        this.signs = signs;
    }

    public UUID getRecruiterId() {
        return recruiterId;
    }

    public void setRecruiterId(UUID recruiterId) {
        this.recruiterId = recruiterId;
    }
}
