package com.ruet.sac.entity;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "brunch")
public class Brunch {
    @Id
    @Column(name = "brunch_id", nullable = false)
    private Integer id;

    @Column(name = "brunch_name", length = 100)
    private String brunchName;

    @Lob
    @Column(name = "brunch_recrutement_process")
    private String brunchRecrutementProcess;

    @Lob
    @Column(name = "brunch_facilities")
    private String brunchFacilities;

    @Lob
    @Column(name = "brunch_address")
    private String brunchAddress;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "institute_id")
    private Institute institute;

    @OneToMany(mappedBy = "jobOrganizationBrunch")
    private Set<Jobhistory> jobhistories = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrunchName() {
        return brunchName;
    }

    public void setBrunchName(String brunchName) {
        this.brunchName = brunchName;
    }

    public String getBrunchRecrutementProcess() {
        return brunchRecrutementProcess;
    }

    public void setBrunchRecrutementProcess(String brunchRecrutementProcess) {
        this.brunchRecrutementProcess = brunchRecrutementProcess;
    }

    public String getBrunchFacilities() {
        return brunchFacilities;
    }

    public void setBrunchFacilities(String brunchFacilities) {
        this.brunchFacilities = brunchFacilities;
    }

    public String getBrunchAddress() {
        return brunchAddress;
    }

    public void setBrunchAddress(String brunchAddress) {
        this.brunchAddress = brunchAddress;
    }

    public Institute getInstitute() {
        return institute;
    }

    public void setInstitute(Institute institute) {
        this.institute = institute;
    }

    public Set<Jobhistory> getJobhistories() {
        return jobhistories;
    }

    public void setJobhistories(Set<Jobhistory> jobhistories) {
        this.jobhistories = jobhistories;
    }

}