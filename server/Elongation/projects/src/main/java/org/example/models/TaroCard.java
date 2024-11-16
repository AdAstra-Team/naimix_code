package org.example.models;

public class TaroCard {
    private String type;
    private String nameShort;
    private String name;
    private String value;
    private int valueInt;
    private String meaningUp;
    private String meaningRev;
    private String desc;

    // Getters and setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNameShort() {
        return nameShort;
    }

    public void setNameShort(String nameShort) {
        this.nameShort = nameShort;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getValueInt() {
        return valueInt;
    }

    public void setValueInt(int valueInt) {
        this.valueInt = valueInt;
    }

    public String getMeaningUp() {
        return meaningUp;
    }

    public void setMeaningUp(String meaningUp) {
        this.meaningUp = meaningUp;
    }

    public String getMeaningRev() {
        return meaningRev;
    }

    public void setMeaningRev(String meaningRev) {
        this.meaningRev = meaningRev;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return "TaroCard{" +
                "type='" + type + '\'' +
                ", nameShort='" + nameShort + '\'' +
                ", name='" + name + '\'' +
                ", value='" + value + '\'' +
                ", valueInt=" + valueInt +
                ", meaningUp='" + meaningUp + '\'' +
                ", meaningRev='" + meaningRev + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }
}
