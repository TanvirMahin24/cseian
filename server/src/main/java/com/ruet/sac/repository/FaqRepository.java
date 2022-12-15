package com.ruet.sac.repository;

import com.ruet.sac.entity.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FaqRepository extends JpaRepository<Faq, Integer> {
    @Query("Select f.id,f.question,f.answer,qw.id,qw.name,qw.picture,fr.id,fr.name,fr.picture from Faq f join f.questionWoner qw join f.replyer fr where f.status=1 order by f.id desc")
    List<Object[]> getAllFaqsWithAnswer();
    @Query("Select f.id,f.question,qw.id,qw.name,qw.picture from Faq f join f.questionWoner qw where f.status=0 order by f.id desc")
    List<Object[]> getAllFaqsWithoutAnswer();

    @Query("Select qw.email from Faq f join f.questionWoner qw where f.id=:questionId ")
    String getQuestionWonerEmailByQuestionId(@Param("questionId")Integer questionId);
    @Modifying
    @Query(value="delete from faq where id = :questionId ", nativeQuery=true)
    public void deleteFaqById(@Param("questionId")Integer questionId);
}
