package com.ruet.sac.repository;

import com.ruet.sac.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Query("Select ur.id from Member m join m.userRole ur where m.id=:studentId")
    Integer findStatusByStudentId(Integer studentId);

    @Query("Select m.id,m.name,m.picture,m.contactNo from Member m join m.userRole ur where ur.id=1")
    List<Object[]> getPendingMemberList();

    @Query("Select count( m.id) from Member m join m.userRole ur where ur.id>1")
    Integer getAllMemberCount();

    @Query("Select count( m.id) from Member m join m.userRole ur where ur.id = :roleId")
    Integer getAllSpesificMemberCount(Integer roleId);

    @Query("Select count( DISTINCT m.country) from Member m")
    Integer getAllCountryCount();

    @Query("Select m.id,m.name,m.picture,m.contactNo from Member m join m.userRole ur where ur.id=1 and (cast(m.id as string) like %:searchText% or m.name like %:searchText% or m.contactNo like %:searchText%)")
    List<Object[]> getFilteredPendingMemberList(String searchText);

    @Query("Select m.id,m.series,m.name,m.picture,m.document,m.country,m.city,m.email,m.contactNo from Member m join m.userRole ur where ur.id=1 and m.id=:studentId")
    List<Object[]> getPendingMember(Integer studentId);

    @Query("Select m.id,m.name,m.picture,m.contactNo from Member m join m.userRole ur where ur.id>1")
    List<Object[]> getMemberList();

    @Query("Select m.id,m.name,m.picture from Member m join m.userRole ur where ur.id>1 order by rand()")
    List<Object[]> getRandomMemberList(Pageable pageable);

    @Query("Select m.id,m.name,m.picture,m.contactNo from Member m join m.userRole ur where ur.id>1 and (cast(m.id as string) like %:searchText% or m.name like %:searchText% or m.contactNo like %:searchText%)")
    List<Object[]> getFilteredMemberList(String searchText);

    @Query("Select m.id,m.series,m.name,m.picture,m.document,m.country,m.city,m.email,m.contactNo from Member m join m.userRole ur where ur.id>1 and m.id=:studentId")
    List<Object[]> getMember(Integer studentId);


    @Query("Select DISTINCT al.id ,al.name,al.picture ,al.country , al.city  from Jobhistory jh join jh.jobOrganization jo join jh.jobOrganizationBrunch jbo join jh.alumniStudent al where cast(al.id as string) like %:searchText% or al.name like %:searchText% or jh.jobField like %:searchText% or jh.jobTitle like %:searchText% or jo.instituteName like %:searchText% or  jbo.brunchName like %:searchText%")
    Page<Object[]> users(Pageable pageable, String searchText);
}