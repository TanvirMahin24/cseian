package com.ruet.sac.user.service;

import com.ruet.sac.entity.Comment;
import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.Post;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.CommentRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.PostRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    TableRegistryRepository tableRegistryRepository;
    @Autowired
    MemberRepository memberRepository;

    @Autowired
    PostRepository postRepository;
    @Autowired
    public JwtUtil jwtUtil;

    public List<HashMap<String, Object>> getCommentsByPostId(Integer pageNumber, Integer postId) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= commentRepository.getAllCommentsByPostId(postId); //PageRequest.of(pageNumber,10)
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("commentId",(Integer) ob[0]);
            resultsObj.put("postDescription",(String) ob[1]);
            resultsObj.put("postWonerId",(String) ob[2]);
            resultsObj.put("postWonerName",(String) ob[3]);
            resultsObj.put("postWonerPicture",(Integer) ob[4]);
            resultsObj.put("postDate",(String) ob[5]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public void saveComment(String jwt,Integer postId, String commentDescription) {
        Integer commentWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Member commentWoner = memberRepository.getReferenceById(commentWonerId);
        Post post = postRepository.getReferenceById(postId);



        // get Primary key of posts table
        TableRegistry r = tableRegistryRepository.getReferenceById(6);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        Comment comment = new Comment();
        comment.setId(id);
        comment.setCommentDescription(commentDescription);
        comment.setPost(post);
        comment.setCommentWoner(commentWoner);
        commentRepository.save(comment);
    }

    public boolean editComment(String jwt, Integer commentId, String commentDescription) {
        Integer commentWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Comment comment = commentRepository.getReferenceById(commentId);
        if(comment.getCommentWoner().getId()!=commentWonerId) return false;

        comment.setCommentDescription(commentDescription);
        commentRepository.save(comment);
        return true;
    }

    public boolean deleteComment(String jwt, Integer commentId) {
        Integer commentWonerId = parseInt(jwtUtil.extractUsername(jwt));
        if(commentRepository.getReferenceById(commentId).getCommentWoner().getId()!=commentWonerId) return false;
        commentRepository.deleteCommentById(commentId);
        return true;
    }
}
