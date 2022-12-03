package com.ruet.sac.repository;

import com.ruet.sac.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Query("Select ur.id from Member m join m.userRole ur where m.id=:studentId")
    Integer findStatusByStudentId(Integer studentId);

    @Query("Select DISTINCT al.id ,al.name,al.picture ,al.country , al.city  from Jobhistory jh join jh.jobOrganization jo join jh.jobOrganizationBrunch jbo join jh.alumniStudent al where al.series=:series order by al.id desc")
    List<Object[]> getSeriesInfo(Integer series);

    @Query("Select DISTINCT al.id ,al.name,al.picture ,al.country , al.city  from Jobhistory jh join jh.jobOrganization jo join jh.jobOrganizationBrunch jbo join jh.alumniStudent al where cast(al.id as string) like %:searchText% or al.name like %:searchText% or jh.jobField like %:searchText% or jh.jobTitle like %:searchText% or jo.instituteName like %:searchText% or  jbo.brunchName like %:searchText%")
    List<Object[]> searchSeriesInfo(String searchText);
}