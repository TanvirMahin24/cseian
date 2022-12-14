package com.ruet.sac.repository;

import com.ruet.sac.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("Select c.id,c.commentDescription,cw.id,cw.name,cw.picture from Comment c join c.commentWoner cw join c.post p where p.id=:postId order by c.id desc")
    List<Object[]> getAllCommentsByPostId(Integer postId);
    @Modifying
    @Query(value="delete from comment where id = :commentId ", nativeQuery=true)
    public void deleteCommentById(@Param("commentId")Integer commentId);
    @Modifying
    @Query(value="delete from comment where post_id = :postId ", nativeQuery=true)
    public void deleteCommentByPostId(@Param("postId")Integer postId);

}