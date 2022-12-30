package com.ruet.sac.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "job_posts")
public class JobPost {
    @Id
    @Column(name = "job_id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "company_name", nullable = false, length = 300)
    private String companyName;

    @Lob
    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "deadline", nullable = false)
    private LocalDate deadline;

    @Column(name = "duration_type", nullable = false, length = 100)
    private String durationType;

    @Column(name = "placement_type", nullable = false, length = 100)
    private String placementType;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @Lob
    @Column(name = "applicationlink", nullable = false)
    private String applicationlink;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "post_woner", nullable = false)
    private Member postWoner;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public String getDurationType() {
        return durationType;
    }

    public void setDurationType(String durationType) {
        this.durationType = durationType;
    }

    public String getPlacementType() {
        return placementType;
    }

    public void setPlacementType(String placementType) {
        this.placementType = placementType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getApplicationlink() {
        return applicationlink;
    }

    public void setApplicationlink(String applicationlink) {
        this.applicationlink = applicationlink;
    }

    public Member getPostWoner() {
        return postWoner;
    }

    public void setPostWoner(Member postWoner) {
        this.postWoner = postWoner;
    }

}