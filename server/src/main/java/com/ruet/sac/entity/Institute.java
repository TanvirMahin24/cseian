package com.ruet.sac.entity;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "institute")
public class Institute {
    @Id
    @Column(name = "institute_id", nullable = false)
    private Integer id;

    @Column(name = "institute_name", length = 100)
    private String instituteName;

    @Lob
    @Column(name = "recrutement_process")
    private String recrutementProcess;

    @Lob
    @Column(name = "facilities")
    private String facilities;

    @Lob
    @Column(name = "institute_address")
    private String instituteAddress;

    @OneToMany(mappedBy = "institute")
    private Set<Brunch> brunches = new LinkedHashSet<>();

    @OneToMany(mappedBy = "jobOrganization")
    private Set<Jobhistory> jobhistories = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getInstituteName() {
        return instituteName;
    }

    public void setInstituteName(String instituteName) {
        this.instituteName = instituteName;
    }

    public String getRecrutementProcess() {
        return recrutementProcess;
    }

    public void setRecrutementProcess(String recrutementProcess) {
        this.recrutementProcess = recrutementProcess;
    }

    public String getFacilities() {
        return facilities;
    }

    public void setFacilities(String facilities) {
        this.facilities = facilities;
    }

    public String getInstituteAddress() {
        return instituteAddress;
    }

    public void setInstituteAddress(String instituteAddress) {
        this.instituteAddress = instituteAddress;
    }

    public Set<Brunch> getBrunches() {
        return brunches;
    }

    public void setBrunches(Set<Brunch> brunches) {
        this.brunches = brunches;
    }

    public Set<Jobhistory> getJobhistories() {
        return jobhistories;
    }

    public void setJobhistories(Set<Jobhistory> jobhistories) {
        this.jobhistories = jobhistories;
    }

}