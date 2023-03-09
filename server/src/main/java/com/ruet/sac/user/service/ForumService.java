package com.ruet.sac.user.service;

import com.ruet.sac.entity.*;
import com.ruet.sac.repository.FaqRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.util.EmailDetailsUtil;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class ForumService {
    @Autowired
    TableRegistryRepository tableRegistryRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    FaqRepository faqRepository;

    @Autowired
    EmailService emailService;

    @Autowired
    public JwtUtil jwtUtil;

    public List<HashMap<String, Object>> getAllFaqsWithAnswer(Integer pageNumber) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= faqRepository.getAllFaqsWithAnswer(); //PageRequest.of(pageNumber,10)
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("faqId",(Integer) ob[0]);
            resultsObj.put("question",(String) ob[1]);
            resultsObj.put("answer",(String) ob[2]);
            resultsObj.put("questionWonerId",(Integer) ob[3]);
            resultsObj.put("questionWonerName",(String) ob[4]);
            resultsObj.put("postWonerPicture",(String) ob[5]);
            resultsObj.put("replyerId",(Integer) ob[6]);
            resultsObj.put("replyerName",(String) ob[7]);
            resultsObj.put("replyerPicture",(String) ob[8]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public List<HashMap<String, Object>> getAllFaqsWithoutAnswer(Integer pageNumber) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= faqRepository.getAllFaqsWithoutAnswer(); //PageRequest.of(pageNumber,10)
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("faqId",(Integer) ob[0]);
            resultsObj.put("question",(String) ob[1]);
            resultsObj.put("questionWonerId",(Integer) ob[2]);
            resultsObj.put("postWonerPicture",(String) ob[3]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    @Transactional
    public void addFaq(String jwt, String question) {
        Integer questionWonerId = parseInt(jwtUtil.extractUsername(jwt));
        Member questionWoner = memberRepository.getReferenceById(questionWonerId);



        // get Primary key of faqs table
        TableRegistry r = tableRegistryRepository.getReferenceById(2);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        Faq faq = new Faq();
        faq.setId(id);
        faq.setQuestion(question);
        faq.setQuestionWoner(questionWoner);
        faq.setStatus(0);
        faqRepository.save(faq);
    }

    @Transactional
    public void addAnswer(String jwt,Integer faqId, String answer) {
        Integer replyerId = parseInt(jwtUtil.extractUsername(jwt));
        Member replyer = memberRepository.getReferenceById(replyerId);

        Faq faq = faqRepository.getReferenceById(faqId);
        faq.setAnswer(answer);
        faq.setReplyer(replyer);
        faq.setStatus(1);
        faqRepository.save(faq);

        String questionWonerEmail = faqRepository.getQuestionWonerEmailByQuestionId(faqId);


        EmailDetailsUtil emailDetails = new EmailDetailsUtil();
        emailDetails.setRecipient(questionWonerEmail);
        emailDetails.setSubject("Answered Question at RUET CSE Alumni");
        emailDetails.setTemplate("faqNotificationTemplate.html");
        emailService.sendConfirmationMessage(emailDetails);
    }

    public boolean deleteFaq(String jwt, Integer faqId) {
        Integer faqWonerId = parseInt(jwtUtil.extractUsername(jwt));
        if(!faqRepository.getReferenceById(faqId).getQuestionWoner().getId().equals(faqWonerId)) return false;
        faqRepository.deleteById(faqId);
        return true;
    }
}
