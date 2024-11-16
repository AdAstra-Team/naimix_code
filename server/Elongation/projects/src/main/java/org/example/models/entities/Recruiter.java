package org.example.models.entities;

import jakarta.persistence.*;
import org.example.models.dao.RecruiterRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(unique = true)
    private String name;
    private String email;
    private String publicName;
    private String surname;
    private Long birthday;
    private Integer sign;
    private String number;
    private ArrayList<Byte> photo;
    private String passwordHash;

    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Team> teams = new ArrayList<>();

    public Recruiter() {
    }

    public Recruiter(RecruiterRequest recruiterRequest) {
        name = recruiterRequest.getName();
        passwordHash = recruiterRequest.getPasswordHash();
        email = recruiterRequest.getEmail();
        publicName = recruiterRequest.getPublicName();
        surname = recruiterRequest.getSurname();
        birthday = recruiterRequest.getBirthday();
        sign = recruiterRequest.getSign();
        number = recruiterRequest.getNumber();
        photo = recruiterRequest.getPhoto();
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

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
}
