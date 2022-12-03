package com.ruet.sac.repository;

import com.ruet.sac.entity.Jobhistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobhistoryRepository extends JpaRepository<Jobhistory, Integer> {
    @Query("Select jh.id ,jh.jobField , jh.jobTitle ,jo.instituteName , jbo.brunchName  from Jobhistory jh join jh.jobOrganization jo join jh.jobOrganizationBrunch jbo join jh.alumniStudent al where jh.jobStatus=1 and al.id =:studentId")
    List<Object[]> getCurrentJobs(Integer studentId);

    @Query("Select jh.jobField , jh.jobTitle ,jo.instituteName , jbo.brunchName  from Jobhistory jh join jh.jobOrganization jo join jh.jobOrganizationBrunch jbo join jh.alumniStudent al where jh.jobStatus=0 and al.id =:studentId")
    List<Object[]> getPreviousJobs(Integer studentId);
}