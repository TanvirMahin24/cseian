package com.ruet.sac.service;

import com.ruet.sac.repository.JobhistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class SeriesInfoService {

    @Autowired
    JobhistoryRepository jobhistoryRepository;

    public List<HashMap<String,Object>> getSeriesWiseAlumniList(Integer series) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= jobhistoryRepository.getSeriesInfo(series);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniStudentId",(Integer) ob[0]);
            resultsObj.put("alumniName",(String) ob[1]);
            resultsObj.put("alumniPicture",(String) ob[2]);
            resultsObj.put("alumniJobField",(String) ob[3]);
            resultsObj.put("alumniJobTitle",(String) ob[4]);
            resultsObj.put("alumniJobOrganization",(String) ob[5]);
            resultsObj.put("alumniJobOrganizationBrunch",(String) ob[6]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public List<HashMap<String,Object>> searchSeriesInfo(String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= jobhistoryRepository.searchSeriesInfo(searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniStudentId",(Integer) ob[0]);
            resultsObj.put("alumniName",(String) ob[1]);
            resultsObj.put("alumniPicture",(String) ob[2]);
            resultsObj.put("alumniJobField",(String) ob[3]);
            resultsObj.put("alumniJobTitle",(String) ob[4]);
            resultsObj.put("alumniJobOrganization",(String) ob[5]);
            resultsObj.put("alumniJobOrganizationBrunch",(String) ob[6]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }
}
