package org.example.models.entities;

import jakarta.persistence.*;
import org.example.models.dao.CandidateRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String surname;
    private ArrayList<Byte> photo;
    private Long birthday;
    private Integer destiny;
    private Integer sign;

    public Candidate() {
    }

    public Candidate(CandidateRequest candidateRequest, int destiny){
        name = candidateRequest.getName();
        surname = candidateRequest.getSurname();
        photo = candidateRequest.getPhoto();
        birthday = candidateRequest.getBirthday();
        this.destiny = destiny;
        sign = candidateRequest.getSign();
    }

    @ManyToMany
    @JoinTable(
            name = "team_candidate",
            joinColumns = @JoinColumn(name = "candidate_id"),
            inverseJoinColumns = @JoinColumn(name = "team_id")
    )
    private List<Team> teams = new ArrayList<>();

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

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
}
