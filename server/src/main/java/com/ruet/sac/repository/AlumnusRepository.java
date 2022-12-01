package com.ruet.sac.repository;

import com.ruet.sac.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AlumnusRepository extends JpaRepository<Member, Integer> {

    @Query("Select al.status from Member al where al.id=:studentId")
    Integer findStatusByStudentId(Integer studentId);
}