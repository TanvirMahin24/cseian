package com.ruet.sac.repository;

import com.ruet.sac.entity.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobPostRepository extends JpaRepository<JobPost, Integer> {

    @Query("Select p.id,p.title,p.companyName,p.location,p.date,p.deadline,p.durationType,p.placementType,p.description,p.applicationlink,pw.id,pw.name,pw.picture from JobPost p join p.postWoner pw order by p.id desc")
    List<Object[]> getAllJobPost( );

    @Query("Select p.id,p.title,p.companyName,p.location,p.date,p.deadline,p.durationType,p.placementType,p.description,p.applicationlink,pw.id,pw.name,pw.picture from JobPost p join p.postWoner pw where p.title like %:searchText% or p.companyName like %:searchText% or p.location like %:searchText% or p.durationType like %:searchText% or p.placementType like %:searchText% or p.description like %:searchText% or cast(p.deadline as string) like %:searchText%  order by p.id desc")
    List<Object[]> getFilteredJobPost(String searchText);
}