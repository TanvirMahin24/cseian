package com.ruet.sac.service;

import com.ruet.sac.entity.Jobhistory;
import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.repository.JobhistoryRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class ProfileService {
    @Autowired
    JobhistoryRepository jobhistoryRepository;

    @Autowired
    AlumnusRepository alumnusRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    OgranizationService ogranizationService;

    public void leftJob(Integer jobId)
    {
        Jobhistory jobhistory = jobhistoryRepository.getReferenceById(jobId);
        jobhistory.setJobStatus(0);
        jobhistoryRepository.save(jobhistory);
    }

    @Transactional
    public void addJob(Integer studentId,String jobField, String jobTitle , String jobOrganization ,String jobBrunch)
    {
        // get Primary key of jobhistory table
        TableRegistry r = tableRegistryRepository.getReferenceById(4);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        Jobhistory jobhistory = new Jobhistory();
        jobhistory.setId(id);
        jobhistory.setJobField(jobField);
        jobhistory.setJobTitle(jobTitle);
        jobhistory.setAlumniStudent(alumnusRepository.getReferenceById(studentId));
        jobhistory.setJobOrganization(ogranizationService.getOrganizationByName(jobOrganization));
        jobhistory.setJobOrganizationBrunch(ogranizationService.getBrunchByNameAndOrganizationName(jobBrunch,jobOrganization));
        jobhistory.setJobStatus(1);

        jobhistoryRepository.save(jobhistory);
    }

    public HashMap<String,Object> getProfileInfo(Integer studentId) {

        Member member = alumnusRepository.getReferenceById(studentId);

        List<HashMap<String,Object>> currentJobs = new ArrayList<>();

        List<Object[]> list= jobhistoryRepository.getCurrentJobs(studentId);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniJobId",(Integer) ob[0]);
            resultsObj.put("alumniJobField",(String) ob[1]);
            resultsObj.put("alumniJobTitle",(String) ob[2]);
            resultsObj.put("alumniJobOrganization",(String) ob[3]);
            resultsObj.put("alumniJobOrganizationBrunch",(String) ob[4]);

            currentJobs.add(resultsObj);
        }

        List<HashMap<String,Object>> previousJobs = new ArrayList<>();

         list= jobhistoryRepository.getPreviousJobs(studentId);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("alumniJobField",(String) ob[0]);
            resultsObj.put("alumniJobTitle",(String) ob[1]);
            resultsObj.put("alumniJobOrganization",(String) ob[2]);
            resultsObj.put("alumniJobOrganizationBrunch",(String) ob[3]);

            previousJobs.add(resultsObj);
        }
        HashMap<String,Object> returnObj = new HashMap<>();
        returnObj.put("alumniStudentId",member.getId());
        returnObj.put("alumniName",member.getName());
        returnObj.put("alumniPicture",member.getPicture());
        returnObj.put("alumniEmail",member.getEmail());
        returnObj.put("alumniLinkedin",member.getLinkedin());
        returnObj.put("alumniContact",member.getContactNo());
        returnObj.put("alumniAvailableContactHour",member.getAvailableTimeToContact());
        returnObj.put("alumniCurrentJobs",currentJobs);
        returnObj.put("alumniPreviousJobs",previousJobs);

        return returnObj;
    }
}
