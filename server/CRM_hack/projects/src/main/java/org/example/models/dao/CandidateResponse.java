package org.example.models.dao;

import org.example.models.entities.Candidate;

import java.util.ArrayList;
import java.util.UUID;

public class CandidateResponse {
    private UUID id;
    private String name;
    private String surname;
    private ArrayList<Byte> photo;
    private Long birthday;
    private Integer destiny;
    private Integer sign;

    public CandidateResponse(Candidate candidate){
        id = candidate.getId();
        name = candidate.getName();
        surname = candidate.getSurname();
        photo = candidate.getPhoto();
        birthday = candidate.getBirthday();
        destiny = candidate.getDestiny();
        sign = candidate.getSign();
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public ArrayList<Byte> getPhoto() {
        return photo;
    }

    public void setPhoto(ArrayList<Byte> photo) {
        this.photo = photo;
    }

    public Long getBirthday() {
        return birthday;
    }

    public void setBirthday(Long birthday) {
        this.birthday = birthday;
    }

    public Integer getDestiny() {
        return destiny;
    }

    public void setDestiny(Integer destiny) {
        this.destiny = destiny;
    }

    public Integer getSign() {
        return sign;
    }

    public void setSign(Integer sign) {
        this.sign = sign;
    }
}
