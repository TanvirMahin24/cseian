package com.ruet.sac.user.service;

import com.ruet.sac.entity.JobPost;
import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.JobPostRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class JobPostService {

    @Autowired
    JobPostRepository jobPostRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    public JwtUtil jwtUtil;

    public HashMap<String,Object> getJobPosts(Integer pageNumber,String searchText,String durationType,String placementType) {

        Integer pageLimit=10;
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        Page<Object[]> jobPosts= jobPostRepository.getJobPosts(PageRequest.of(pageNumber,pageLimit),searchText,durationType,placementType);
        for (Object[] ob : jobPosts) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("postId",(Integer) ob[0]);
            resultsObj.put("postTitle",(String) ob[1]);
            resultsObj.put("companyName",(String) ob[2]);
            resultsObj.put("location",(String) ob[3]);
            resultsObj.put("postDate",(LocalDate) ob[4]);
            resultsObj.put("deadline",(Instant) ob[5]);
            resultsObj.put("durationType",(String) ob[6]);
            resultsObj.put("placementType",(String) ob[7]);
            resultsObj.put("description",(String) ob[8]);
            resultsObj.put("applicationlink",(String) ob[9]);
            resultsObj.put("postWonerId",(Integer) ob[10]);
            resultsObj.put("postWonerName",(String) ob[11]);
            resultsObj.put("postWonerPicture",(String) ob[12]);
            resultsArray.add(resultsObj);
        }

        HashMap<String,Object> results = new HashMap();
        Integer pageCount = jobPosts.getTotalPages();//jobPostRepository.getPageCountOfJobPosts(pageLimit,searchText);
        results.put("pageCount",pageCount);
        results.put("pageNumber",pageNumber);
        results.put("pageContent",resultsArray);
        return results;
    }

    @Transactional
    public void saveJobPost( String jwt,String postTitle , String companyName, String location, String deadline, String durationType,String placementType, String description,String applicationlink )
    {
        Integer postWonerId = parseInt(jwtUtil.extractUsername(jwt));
        JobPost jobPost = new JobPost();
        Member postWoner = memberRepository.getReferenceById(postWonerId);

        // get Primary key of job_posts table
        TableRegistry r = tableRegistryRepository.getReferenceById(7);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        jobPost.setId(id);
        jobPost.setPostWoner(postWoner);
        jobPost.setTitle(postTitle);
        jobPost.setCompanyName(companyName);
        jobPost.setLocation(location);
        LocalDate postDate =LocalDate.now();
        jobPost.setDate(postDate);
        jobPost.setDeadline(Instant.parse(deadline));
        jobPost.setDurationType(durationType);
        jobPost.setPlacementType(placementType);
        jobPost.setDescription(description);
        jobPost.setApplicationlink(applicationlink);

        jobPostRepository.save(jobPost);

    }



    @Transactional
    public boolean deleteJobPost(String  jwt, Integer postId){
        Integer postWonerId = parseInt(jwtUtil.extractUsername(jwt));
        JobPost jobPost = jobPostRepository.getReferenceById(postId);

        if(jobPost.getPostWoner().getId()!=postWonerId) return false;

        jobPostRepository.deleteById(postId);
        return true;

    }

}
