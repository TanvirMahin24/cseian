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

    @Lob
    @Column(name = "answer")
    private String answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "replyer_id")
    private Member replyer;

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