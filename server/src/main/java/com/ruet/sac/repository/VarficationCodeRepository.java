package com.ruet.sac.repository;

import com.ruet.sac.entity.VarficationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;

public interface VarficationCodeRepository extends JpaRepository<VarficationCode, Integer> {
    @Query("FROM VarficationCode vc WHERE vc.code=:code and vc.userId=:userId")
    VarficationCode getVarficationCodeInf(String code,Integer userId);

    @Modifying
    @Query(value="delete from varfication_codes where time<=:time ", nativeQuery=true)
    void deleteCodes(Instant time);

    @Modifying
    @Query(value="delete from varfication_codes where code=:code ", nativeQuery=true)
    void deleteCodeBycode(String code);
}