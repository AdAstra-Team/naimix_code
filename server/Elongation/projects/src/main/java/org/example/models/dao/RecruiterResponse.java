package org.example.models.dao;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import org.example.models.entities.Recruiter;
import org.example.models.entities.Team;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class RecruiterResponse {
    private UUID id;
    private String name;
    private ArrayList<UUID> teams;
    private String email;
    private String publicName;
    private String surname;
    private long birthday;
    private Integer sign;
    private String number;
    private ArrayList<Byte> photo;


    public RecruiterResponse() {
    }

    public RecruiterResponse(Recruiter recruiter){
        id = recruiter.getId();
        name = recruiter.getName();

        for(var team : recruiter.getTeams()){
            teams.add(team.getId());
        }
        email = recruiter.getEmail();
        publicName = recruiter.getPublicName();
        surname = recruiter.getSurname();
        birthday = recruiter.getBirthday();
        sign = recruiter.getSign();
        number = recruiter.getNumber();
        photo = recruiter.getPhoto();
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

    public ArrayList<UUID> getTeams() {
        return teams;
    }

    public void setTeams(ArrayList<UUID> teams) {
        this.teams = teams;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPublicName() {
        return publicName;
    }

    public void setPublicName(String publicName) {
        this.publicName = publicName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public long getBirthday() {
        return birthday;
    }

    public void setBirthday(long birthday) {
        this.birthday = birthday;
    }

    public Integer getSign() {
        return sign;
    }

    public void setSign(Integer sign) {
        this.sign = sign;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public ArrayList<Byte> getPhoto() {
        return photo;
    }

    public void setPhoto(ArrayList<Byte> photo) {
        this.photo = photo;
    }
}
