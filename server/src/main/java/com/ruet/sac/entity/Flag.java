package com.ruet.sac.entity;

import javax.persistence.*;

@Entity
@Table(name = "flags")
public class Flag {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "flag_name", nullable = false, length = 100)
    private String flagName;

    @Column(name = "flag_value", nullable = false)
    private Integer flagValue;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFlagName() {
        return flagName;
    }

    public void setFlagName(String flagName) {
        this.flagName = flagName;
    }

    public Integer getFlagValue() {
        return flagValue;
    }

    public void setFlagValue(Integer flagValue) {
        this.flagValue = flagValue;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}