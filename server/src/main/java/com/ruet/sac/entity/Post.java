package com.ruet.sac.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @Column(name = "post_id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "post_title")
    private String postTitle;

    @Lob
    @Column(name = "post_description")
    private String postDescription;

    @Lob
    @Column(name = "post_atachment_link")
    private String postAtachmentLink;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_woner_id")
    private Member postWoner;

    @Column(name = "post_date")
    private LocalDate postDate;

    @Column(name = "post_type", nullable = false)
    private Integer postType;

    @OneToMany(mappedBy = "post")
    private Set<Comment> comments = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    public String getPostAtachmentLink() {
        return postAtachmentLink;
    }

    public void setPostAtachmentLink(String postAtachmentLink) {
        this.postAtachmentLink = postAtachmentLink;
    }

    public Member getPostWoner() {
        return postWoner;
    }

    public void setPostWoner(Member postWoner) {
        this.postWoner = postWoner;
    }

    public LocalDate getPostDate() {
        return postDate;
    }

    public void setPostDate(LocalDate postDate) {
        this.postDate = postDate;
    }

    public Integer getPostType() {
        return postType;
    }

    public void setPostType(Integer postType) {
        this.postType = postType;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

}