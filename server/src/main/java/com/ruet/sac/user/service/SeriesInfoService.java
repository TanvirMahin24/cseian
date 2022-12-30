package com.ruet.sac.user.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.repository.JobhistoryRepository;
import com.ruet.sac.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class SeriesInfoService {

    @Autowired
    JobhistoryRepository jobhistoryRepository;

    @Autowired
    MemberRepository memberRepository;


    public List<HashMap<String,Object>> getSeriesWiseAlumniList(Integer series) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();
        List<Object[]> list= memberRepository.getSeriesInfo(series);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniStudentId",(Integer) ob[0]);
            resultsObj.put("alumniName",(String) ob[1]);
            resultsObj.put("alumniPicture",(String) ob[2]);
            resultsObj.put("country",(String) ob[3]);
            resultsObj.put("city",(String) ob[4]);

            List<HashMap<String,Object>> currentJobs = new ArrayList<>();
            List<Object[]> jobList= jobhistoryRepository.getCurrentJobs((Integer) ob[0]);
            for (Object[] job : jobList) {

                HashMap<String,Object> jobs = new HashMap<>();
                jobs.put("alumniJobId",(Integer) job[0]);
                jobs.put("alumniJobField",(String) job[1]);
                jobs.put("alumniJobTitle",(String) job[2]);
                jobs.put("alumniJobOrganization",(String) job[3]);
                jobs.put("alumniJobOrganizationBrunch",(String) job[4]);

                currentJobs.add(jobs);
            }

            resultsObj.put("memberCurrentJobs",currentJobs);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public List<HashMap<String,Object>> searchSeriesInfo(String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= memberRepository.searchSeriesInfo(searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniStudentId",(Integer) ob[0]);
            resultsObj.put("alumniName",(String) ob[1]);
            resultsObj.put("alumniPicture",(String) ob[2]);
            resultsObj.put("country",(String) ob[3]);
            resultsObj.put("city",(String) ob[4]);

            List<HashMap<String,Object>> currentJobs = new ArrayList<>();
            List<Object[]> jobList= jobhistoryRepository.getCurrentJobs((Integer) ob[0]);
            for (Object[] job : jobList) {

                HashMap<String,Object> jobs = new HashMap<>();
                jobs.put("alumniJobId",(Integer) job[0]);
                jobs.put("alumniJobField",(String) job[1]);
                jobs.put("alumniJobTitle",(String) job[2]);
                jobs.put("alumniJobOrganization",(String) job[3]);
                jobs.put("alumniJobOrganizationBrunch",(String) job[4]);

                currentJobs.add(jobs);
            }

            resultsObj.put("memberCurrentJobs",currentJobs);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }
}
