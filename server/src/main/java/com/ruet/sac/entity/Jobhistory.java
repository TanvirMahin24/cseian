package com.ruet.sac.entity;

import javax.persistence.*;

@Entity
@Table(name = "jobhistory")
public class Jobhistory {
    @Id
    @Column(name = "job_id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "job_field")
    private String jobField;

    @Column(name = "job_title", nullable = false, length = 150)
    private String jobTitle;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "job_organization_id", nullable = false)
    private Institute jobOrganization;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "job_organization_brunch_id", nullable = false)
    private Brunch jobOrganizationBrunch;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "alumni_student_id", nullable = false)
    private Member alumniStudent;

    @Column(name = "job_status", nullable = false)
    private Integer jobStatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJobField() {
        return jobField;
    }

    public void setJobField(String jobField) {
        this.jobField = jobField;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Institute getJobOrganization() {
        return jobOrganization;
    }

    public void setJobOrganization(Institute jobOrganization) {
        this.jobOrganization = jobOrganization;
    }

    public Brunch getJobOrganizationBrunch() {
        return jobOrganizationBrunch;
    }

    public void setJobOrganizationBrunch(Brunch jobOrganizationBrunch) {
        this.jobOrganizationBrunch = jobOrganizationBrunch;
    }

    public Member getAlumniStudent() {
        return alumniStudent;
    }

    public void setAlumniStudent(Member alumniStudent) {
        this.alumniStudent = alumniStudent;
    }

    public Integer getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(Integer jobStatus) {
        this.jobStatus = jobStatus;
    }

}