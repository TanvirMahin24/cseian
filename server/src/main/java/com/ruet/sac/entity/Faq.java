package com.ruet.sac.entity;

import javax.persistence.*;

@Entity
@Table(name = "faq")
public class Faq {
    @Id
    @Column(name = "question_id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "question")
    private String question;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "question_woner", nullable = false)
    private Member questionWoner;

    @Lob
    @Column(name = "answer")
    private String answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "replyer_id")
    private Member replyer;

    @Column(name = "status", nullable = false)
    private Integer status;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }


    public Member getQuestionWoner() {
        return questionWoner;
    }

    public void setQuestionWoner(Member questionWoner) {
        this.questionWoner = questionWoner;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Member getReplyer() {
        return replyer;
    }

    public void setReplyer(Member replyer) {
        this.replyer = replyer;
    }

}