package com.ruet.sac.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "options")
public class Option {
    @Id
    @Column(name = "option_id", nullable = false)
    private Integer id;

    @Column(name = "option_name", nullable = false)
    private Integer optionName;

    @Column(name = "option_link", nullable = false)
    private Integer optionLink;

    @Column(name = "option_description", nullable = false)
    private Integer optionDescription;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOptionName() {
        return optionName;
    }

    public void setOptionName(Integer optionName) {
        this.optionName = optionName;
    }

    public Integer getOptionLink() {
        return optionLink;
    }

    public void setOptionLink(Integer optionLink) {
        this.optionLink = optionLink;
    }

    public Integer getOptionDescription() {
        return optionDescription;
    }

    public void setOptionDescription(Integer optionDescription) {
        this.optionDescription = optionDescription;
    }

}