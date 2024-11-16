package org.example.models.dao;

import org.example.models.entities.Recruiter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class RecruiterRequest {
    private String name;
    private String passwordHash;
    private String email;
    private String publicName;
    private String surname;
    private long birthday;
    private Integer sign;
    private String number;
    private ArrayList<Byte> photo;

    public RecruiterRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
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
