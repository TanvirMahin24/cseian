package com.ruet.sac.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.Post;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.repository.PostRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class PostService {

        @Value("${deploy.url}") String deployUrl ;
        @Value("${imageResourse.path}") String imagePath ;

        @Autowired
        PostRepository postRepository;

        @Autowired
        AlumnusRepository alumnusRepository;

        @Autowired
        FileUploadService fileUploadService;

        @Autowired
        TableRegistryRepository tableRegistryRepository;

        public List<HashMap<String,Object>> getAllPosts(Integer pageNumber) {

            List<HashMap<String,Object>> resultsArray = new ArrayList<>();

            List<Object[]> list= postRepository.getAllPost(); //PageRequest.of(pageNumber,10)
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


    public List<HashMap<String,Object>> getFilteredPosts(String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= postRepository.getFilteredPost(searchText);
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
    public void savePost( Integer postWonerId,String postDescription , MultipartFile image )
    {
        Post post = new Post();
        Member postWoner = alumnusRepository.getReferenceById(postWonerId);

        // get Primary key of posts table
        TableRegistry r = tableRegistryRepository.getReferenceById(5);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        post.setId(id);
        post.setPostWoner(postWoner);
        post.setPostDescription(postDescription);
        if(image!=null)
        {
            String imageName = fileUploadService.saveFile(image ,"postImage"+"69");
            post.setPostImage(deployUrl+imagePath+"?imageName="+imageName);
        }
        LocalDate postDate =LocalDate.now();
        post.setPostDate(postDate);

        postRepository.save(post);

    }
}
