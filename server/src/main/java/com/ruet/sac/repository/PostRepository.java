package com.ruet.sac.repository;

import com.ruet.sac.entity.Post;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("Select p.id,p.postTitle,p.postDescription,p.postAtachmentLink,pw.id,pw.name,pw.picture,p.postDate from Post p join p.postWoner pw order by p.id desc")
    List<Object[]> getAllPost(Pageable pageable);

    @Query("Select p.id,p.postTitle,p.postDescription,p.postAtachmentLink,pw.id,pw.name,pw.picture,p.postDate from Post p join p.postWoner pw where pw.name like %:searchText% or p.postDescription like %:searchText% order by p.id desc")
    List<Object[]> getFilteredPost(Pageable pageable,String searchText);
}