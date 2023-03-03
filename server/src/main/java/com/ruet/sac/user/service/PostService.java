package com.ruet.sac.user.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.Post;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.CommentRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.PostRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class PostService {

        @Value("${deploy.url}") String deployUrl ;
        @Value("${imageResourse.path}") String imagePath ;

        @Autowired
        PostRepository postRepository;

        @Autowired
        CommentRepository commentRepository;

        @Autowired
        MemberRepository memberRepository;

        @Autowired
        FileUploadService fileUploadService;

        @Autowired
        TableRegistryRepository tableRegistryRepository;

        @Autowired
        public JwtUtil jwtUtil;

        public List<HashMap<String,Object>> getAllPosts(Integer pageNumber) {

            List<HashMap<String,Object>> resultsArray = new ArrayList<>();

            List<Object[]> list= postRepository.getAllPost(PageRequest.of(pageNumber,10)); //
            for (Object[] ob : list) {

                HashMap<String,Object> resultsObj = new HashMap<>();
                resultsObj.put("postId",(Integer) ob[0]);
                resultsObj.put("postTitle",(String) ob[1]);
                resultsObj.put("postDescription",(String) ob[2]);
                resultsObj.put("postImage",(String) ob[3]);
                resultsObj.put("postWonerId",(Integer) ob[4]);
                resultsObj.put("postWonerName",(String) ob[5]);
                resultsObj.put("postWonerPicture",(String) ob[6]);
                resultsObj.put("postDate",(LocalDate) ob[7]);
                resultsArray.add(resultsObj);
        }
        return resultsArray;
    }


    public List<HashMap<String,Object>> getFilteredPosts(Integer pageNumber,String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= postRepository.getFilteredPost(PageRequest.of(pageNumber,10),searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("postId",(Integer) ob[0]);
            resultsObj.put("postTitle",(String) ob[1]);
            resultsObj.put("postDescription",(String) ob[2]);
            resultsObj.put("postImage",(String) ob[3]);
            resultsObj.put("postWonerId",(Integer) ob[4]);
            resultsObj.put("postWonerName",(String) ob[5]);
            resultsObj.put("postWonerPicture",(String) ob[6]);
            resultsObj.put("postDate",(LocalDate) ob[7]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    @Transactional
    public void savePost( String jwt,String postDescription , MultipartFile postImage )
    {
        Integer postWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Post post = new Post();
        Member postWoner = memberRepository.getReferenceById(postWonerId);

        // get Primary key of posts table
        TableRegistry r = tableRegistryRepository.getReferenceById(5);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        post.setId(id);
        post.setPostWoner(postWoner);
        post.setPostDescription(postDescription);
        if(postImage!=null)
        {
            String imageName = fileUploadService.saveFile(postImage ,"postImage"+id);
            post.setPostAtachmentLink(deployUrl+imagePath+"?imageName="+imageName);
        }
        LocalDate postDate =LocalDate.now();
        post.setPostDate(postDate);
        post.setPostType(0);

        postRepository.save(post);

    }

    @Transactional
    public boolean editPost(String jwt,Integer postId,String postDescription , MultipartFile postImage )
    {
        Integer postWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Post post = postRepository.getReferenceById(postId);
        Integer originalPostWonerId = post.getPostWoner().getId();
        if(!originalPostWonerId.equals(postWonerId)) return false;
        if(postDescription!=null && postDescription.length()!=0) post.setPostDescription(postDescription);
        if(postImage!=null)
        {
            String imageName = fileUploadService.saveFile(postImage ,"postImage"+postId);
            post.setPostAtachmentLink(deployUrl+imagePath+"?imageName="+imageName);
        }

        postRepository.save(post);
        return true;

    }

    @Transactional
    public boolean deletePost(String  jwt, Integer postId){
        Integer postWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Post post = postRepository.getReferenceById(postId);

        if(!post.getPostWoner().getId().equals(postWonerId)) return false;

        commentRepository.deleteCommentByPostId(postId);
        postRepository.deleteById(postId);
        return true;

    }
}
