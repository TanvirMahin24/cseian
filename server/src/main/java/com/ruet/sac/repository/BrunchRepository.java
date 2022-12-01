package com.ruet.sac.repository;

import com.ruet.sac.entity.Brunch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BrunchRepository extends JpaRepository<Brunch, Integer> {
    @Query("from Brunch br join br.institute ins where br.brunchName=:brunchName and ins.id=:organizationId")
    Brunch getBrunchIdByNameAndOrganizationId(String brunchName,Integer organizationId);
}