package com.ruet.sac.repository;

import com.ruet.sac.entity.Institute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InstituteRepository extends JpaRepository<Institute, Integer> {

    @Query("FROM Institute ins WHERE ins.instituteName=:organizationName")
    Institute getOrganizationIdByName(String organizationName);
}