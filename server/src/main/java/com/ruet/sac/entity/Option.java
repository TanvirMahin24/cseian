package com.ruet.sac.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "options")
public class Option {
    @Column(name = "option_id", nullable = false)
    private Integer optionId;

    @Column(name = "option_name", nullable = false)
    private Integer optionName;

    @Column(name = "option_link", nullable = false)
    private Integer optionLink;

    @Column(name = "option_description", nullable = false)
    private Integer optionDescription;

    public Integer getOptionId() {
        return optionId;
    }

    public void setOptionId(Integer optionId) {
        this.optionId = optionId;
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