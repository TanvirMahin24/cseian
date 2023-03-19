package com.ruet.sac.user.service;

import com.ruet.sac.repository.JobPostRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class DashboardSearvice {
    @Autowired
    MemberRepository memberRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    JobPostRepository jobPostRepository;
    public HashMap<String, Object> getDashboardData() {

        Integer members = memberRepository.getAllMemberCount();
        Integer Alumni = memberRepository.getAllSpesificMemberCount(6);
        Integer faculty = memberRepository.getAllSpesificMemberCount(4);
        Integer countries = memberRepository.getAllCountryCount();
        Integer posts = postRepository.getPostCount();
        Integer jobPosts = jobPostRepository.jobPostCount();

        HashMap<String,Object> resultsObj = new HashMap<>();
        resultsObj.put("totalMember",members);
        resultsObj.put("totalAlumni",Alumni);
        resultsObj.put("totalFaculty",faculty);
        resultsObj.put("totalCountriesWeSpread",countries);
        resultsObj.put("totalPostsInForum",posts);
        resultsObj.put("totalJobWeOffered",jobPosts);

        return resultsObj;
    }

    public List<HashMap<String, Object>> getDashboardMember() {

        List<Object[]> list = memberRepository.getRandomMemberList(PageRequest.of(0,10));
        List<HashMap<String, Object>> resultsArray = new ArrayList<>();
        for (Object[] ob : list) {

            HashMap<String,Object> jobs = new HashMap<>();
            jobs.put("memberId",(Integer) ob[0]);
            jobs.put("memberName",(String) ob[1]);
            jobs.put("memberPicture",(String) ob[2]);

            resultsArray.add(jobs);
        }

        return resultsArray;
    }
}
