package com.ruet.sac.repository;

import com.ruet.sac.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Query("Select ur.id from Member m join m.userRole ur where m.id=:studentId")
    Integer findStatusByStudentId(Integer studentId);
}