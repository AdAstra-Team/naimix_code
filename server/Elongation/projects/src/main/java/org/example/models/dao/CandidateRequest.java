package org.example.models.dao;

import java.util.ArrayList;

public class CandidateRequest {
    private String name;
    private String surname;
    private ArrayList<Byte> photo;
    private Long birthday;
    private Integer sign;
    private Integer typeOfDestinyCompute;

    public Integer getTypeOfDestinyCompute() {
        return typeOfDestinyCompute;
    }

    public void setTypeOfDestinyCompute(Integer typeOfDestinyCompute) {
        this.typeOfDestinyCompute = typeOfDestinyCompute;
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

    public Integer getSign() {
        return sign;
    }

    public void setSign(Integer sign) {
        this.sign = sign;
    }
}
