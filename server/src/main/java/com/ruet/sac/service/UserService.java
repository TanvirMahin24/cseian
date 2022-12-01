package com.ruet.sac.service;

import com.ruet.sac.entity.*;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.repository.JobhistoryRepository;
import com.ruet.sac.repository.RoleRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.EmailDetailsUtil;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {


    @Autowired
    AlumnusRepository alumnusRepository;

    @Autowired
    OgranizationService ogranizationService;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    JobhistoryRepository jobhistoryRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    EmailService emailService;

    @Autowired
    VarificationService varificationService;

    @Transactional
    public void registration(String name , Integer studentId , String jobField, String jobTitle , String jobOrganization ,String jobBrunch ,
                             String email , String contactNo,String linkedin , String availableTimeToContact,String password)
    {
            Member member = new Member();

        member.setId(studentId);
            Integer series =0;
            if(studentId>1000000)
                series = studentId/100000;
            else if (studentId>100000)
                series = studentId/10000;
            else series = studentId/1000;
        member.setSeries(series);
        member.setName(name);
        member.setEmail(email);
        member.setContactNo(contactNo);
        member.setLinkedin(linkedin);
        member.setAvailableTimeToContact(availableTimeToContact);
        member.setPassword(password);
        member.setUserRole(roleRepository.getReferenceById(1));

        alumnusRepository.save(member);

            // get Primary key of jobhistory table
            TableRegistry r = tableRegistryRepository.getReferenceById(4);
            Integer id = r.getRegistryKey() + 1;
            r.setRegistryKey(id);
            tableRegistryRepository.save(r);

            Jobhistory jobhistory = new Jobhistory();
            jobhistory.setId(id);
            jobhistory.setJobField(jobField);
            jobhistory.setJobTitle(jobTitle);
            jobhistory.setAlumniStudent(member);
            jobhistory.setJobOrganization(ogranizationService.getOrganizationByName(jobOrganization));
            jobhistory.setJobOrganizationBrunch(ogranizationService.getBrunchByNameAndOrganizationName(jobBrunch,jobOrganization));
            jobhistory.setJobStatus(1);

            jobhistoryRepository.save(jobhistory);



            Map<String, Object> properties = new HashMap<>();
            properties.put("code", varificationService.generateCode(studentId));

            EmailDetailsUtil emailDetails = new EmailDetailsUtil();
            emailDetails.setRecipient(email);
            emailDetails.setSubject("Email Verification for RUET CSE Alumni");
            emailDetails.setTemplate("emailVarificationTemplate.html");
            emailDetails.setProperties(properties);
            emailService.sendConfirmationMessage(emailDetails);

    }

    @Transactional
    public String forgotPassword(Integer studentId)
    {
        String randomCode = RandomString.make(30);
        Member alumni = alumnusRepository.getReferenceById(studentId);
        alumni.setPassword(randomCode);

        alumnusRepository.save(alumni);

        Map<String, Object> properties = new HashMap<>();
        properties.put("password", randomCode);

        EmailDetailsUtil emailDetails = new EmailDetailsUtil();
        emailDetails.setRecipient(alumni.getEmail());
        emailDetails.setSubject("Password Recovery");
        emailDetails.setTemplate("forgotPasswordTemplate.html");
        emailDetails.setProperties(properties);
        emailService.sendConfirmationMessage(emailDetails);

        return alumni.getEmail();
    }
}
