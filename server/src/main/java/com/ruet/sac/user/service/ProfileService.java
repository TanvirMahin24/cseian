package com.ruet.sac.user.service;

import com.ruet.sac.entity.Jobhistory;
import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.TableRegistry;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.JobhistoryRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class ProfileService {

    @Value("${deploy.url}") String deployUrl ;
    @Value("${imageResourse.path}") String imagePath ;

    @Autowired
    FileUploadService fileUploadService;
    @Autowired
    JobhistoryRepository jobhistoryRepository;

    @Autowired
    MemberRepository alumnusRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    OgranizationService ogranizationService;

    @Autowired
    public JwtUtil jwtUtil;




    public HashMap<String,Object> getProfileInfo(Integer studentId, boolean wonerFlag) {

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
            resultsObj.put("memberJobField",(String) ob[0]);
            resultsObj.put("memberJobTitle",(String) ob[1]);
            resultsObj.put("memberJobOrganization",(String) ob[2]);
            resultsObj.put("memberJobOrganizationBrunch",(String) ob[3]);

            previousJobs.add(resultsObj);
        }
        HashMap<String,Object> returnObj = new HashMap<>();
        returnObj.put("memberStudentId",member.getId());
        returnObj.put("memberName",member.getName());
        returnObj.put("memberPictureLink",member.getPicture());
        returnObj.put("memberEmail",member.getEmail());
        returnObj.put("memberLinkedin",member.getLinkedin());
        returnObj.put("memberContact",member.getContactNo());
        returnObj.put("memberCountry",member.getCountry());
        returnObj.put("memberCity",member.getCity());
        returnObj.put("memberAvailableContactHour",member.getAvailableTimeToContact());
        returnObj.put("memberCurrentJobs",currentJobs);
        returnObj.put("memberPreviousJobs",previousJobs);
        if(wonerFlag)
        {
            returnObj.put("memberRole",member.getUserRole().getRoleName());
        }

        return returnObj;
    }


    @Transactional
    public void editProfileInfo(String jwt , String name  , String contactNo,
                             String linkedin , String country , String city , String availableTimeToContact, MultipartFile memberPhoto)
    {
        Integer studentId = parseInt(jwtUtil.extractUsername(jwt));
        Member member = alumnusRepository.getReferenceById(studentId);

        if(name!=null && name.length()!=0)  member.setName(name);
        if(contactNo!=null && contactNo.length()!=0) member.setContactNo(contactNo);
        if(linkedin!=null && linkedin.length()!=0) member.setLinkedin(linkedin);
        if(country!=null && country.length()!=0) member.setCountry(country);
        if(city!=null && city.length()!=0) member.setCity(city);
        if(availableTimeToContact!=null && availableTimeToContact.length()!=0) member.setAvailableTimeToContact(availableTimeToContact);
        if(memberPhoto!=null)
        {
            String imageName = fileUploadService.saveFile(memberPhoto ,"memberImage"+studentId);
            member.setPicture(deployUrl+imagePath+"?imageName="+imageName);
        }

        alumnusRepository.save(member);

    }


    @Transactional
    public void addJob(String jwt,String jobField, String jobTitle , String jobOrganization ,String jobBrunch)
    {

        Integer studentId = parseInt(jwtUtil.extractUsername(jwt));

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

    public boolean leftJob(String jwt,Integer jobId)
    {
        Integer studentId = parseInt(jwtUtil.extractUsername(jwt));
        Jobhistory jobhistory = jobhistoryRepository.getReferenceById(jobId);
        if(jobhistory.getAlumniStudent().getId()==studentId)
        {
            jobhistory.setJobStatus(0);
            jobhistoryRepository.save(jobhistory);
            return true;
        }
        else return false;

    }

}
