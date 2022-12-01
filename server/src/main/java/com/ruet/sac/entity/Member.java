package com.ruet.sac.entity;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "member")
public class Member {
    @Id
    @Column(name = "student_id", nullable = false)
    private Integer id;

    @Column(name = "series", nullable = false)
    private Integer series;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Lob
    @Column(name = "picture")
    private String picture;

    @Column(name = "country", length = 100)
    private String country;

    @Lob
    @Column(name = "city")
    private String city;

    @Column(name = "linkedin", length = 150)
    private String linkedin;

    @Column(name = "email", nullable = false, length = 150)
    private String email;

    @Column(name = "contact_no", length = 15)
    private String contactNo;

    @Column(name = "available_time_to_contact", nullable = false, length = 300)
    private String availableTimeToContact;

    @Column(name = "password", nullable = false, length = 300)
    private String password;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_role_id")
    private Role userRole;

    @OneToMany(mappedBy = "postWoner")
    private Set<Post> posts = new LinkedHashSet<>();

    @OneToMany(mappedBy = "alumniStudent")
    private Set<Jobhistory> jobhistories = new LinkedHashSet<>();

    @OneToMany(mappedBy = "replyer")
    private Set<Faq> faqs = new LinkedHashSet<>();

    @OneToMany(mappedBy = "commentWoner")
    private Set<Comment> comments = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSeries() {
        return series;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getAvailableTimeToContact() {
        return availableTimeToContact;
    }

    public void setAvailableTimeToContact(String availableTimeToContact) {
        this.availableTimeToContact = availableTimeToContact;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getUserRole() {
        return userRole;
    }

    public void setUserRole(Role userRole) {
        this.userRole = userRole;
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public Set<Jobhistory> getJobhistories() {
        return jobhistories;
    }

    public void setJobhistories(Set<Jobhistory> jobhistories) {
        this.jobhistories = jobhistories;
    }

    public Set<Faq> getFaqs() {
        return faqs;
    }

    public void setFaqs(Set<Faq> faqs) {
        this.faqs = faqs;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

}