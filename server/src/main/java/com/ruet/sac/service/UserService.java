package com.ruet.sac.service;

import com.ruet.sac.entity.*;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.JobhistoryRepository;
import com.ruet.sac.repository.RoleRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.EmailDetailsUtil;
import com.ruet.sac.util.JwtUtil;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

import static java.lang.Integer.parseInt;

@Service
public class UserService {


    @Value("${deploy.url}") String deployUrl ;
    @Value("${imageResourse.path}") String imagePath ;

    @Autowired
    FileUploadService fileUploadService;
    @Autowired
    MemberRepository alumnusRepository;

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

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public JwtUtil jwtUtil;

    @Transactional
    public void registration(String name , Integer studentId , String email , String contactNo,
                             String linkedin , String country , String city , String availableTimeToContact,
                             String jobField, String jobTitle , String jobOrganization , String jobBrunch ,
                             String password , MultipartFile memberPhoto)
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
        member.setCountry(country);
        member.setCity(city);
        member.setAvailableTimeToContact(availableTimeToContact);
        member.setPassword(passwordEncoder.encode(password));
        if(memberPhoto!=null)
        {
            String imageName = fileUploadService.saveFile(memberPhoto ,"memberImage"+studentId);
            member.setPicture(deployUrl+imagePath+"?imageName="+imageName);
        }

        alumnusRepository.save(member);
        //System.out.println("Check nahid : "+jobField.length()+" "+jobTitle.length()+" "+jobTitle.length());
        if((jobField!=null && jobTitle!=null && jobOrganization!=null) || (jobOrganization.length()!=0 && jobTitle.length()!=0 && jobField.length()!=0))
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
            jobhistory.setAlumniStudent(member);
            jobhistory.setJobOrganization(ogranizationService.getOrganizationByName(jobOrganization));
            jobhistory.setJobOrganizationBrunch(ogranizationService.getBrunchByNameAndOrganizationName(jobBrunch,jobOrganization));
            jobhistory.setJobStatus(1);

            jobhistoryRepository.save(jobhistory);
        }

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

    @Transactional
    public String resendVerifyEmail(Integer studentId)
    {
        Member member = alumnusRepository.getReferenceById(studentId);


        Map<String, Object> properties = new HashMap<>();
        properties.put("code", varificationService.generateCode(studentId));

        EmailDetailsUtil emailDetails = new EmailDetailsUtil();
        emailDetails.setRecipient(member.getEmail());
        emailDetails.setSubject("Email Verification for RUET CSE Alumni");
        emailDetails.setTemplate("emailVarificationTemplate.html");
        emailDetails.setProperties(properties);
        emailService.sendConfirmationMessage(emailDetails);

        return member.getEmail();
    }

    @Transactional
    public boolean changePassword(String jwt, String oldPassword,String newPassword)
    {
        Integer studentId = parseInt(jwtUtil.extractUsername(jwt));
        Member member = alumnusRepository.getReferenceById(studentId);
        CharSequence password = oldPassword;
        if(passwordEncoder.matches(password,member.getPassword()))
        {
            member.setPassword(passwordEncoder.encode(newPassword));

            alumnusRepository.save(member);
            return true;
        }

        return false;
    }
}
