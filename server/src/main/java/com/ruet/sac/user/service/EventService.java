package com.ruet.sac.user.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.Transaction;
import com.ruet.sac.repository.EventDetailRepository;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.repository.TransactionRepository;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;
@Service
public class EventService {

    @Value("${deploy.url}") String deployUrl ;
    @Value("${imageResourse.path}") String imagePath ;

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    FileUploadService fileUploadService;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    EventDetailRepository eventDetailRepository;

    @Autowired
    public JwtUtil jwtUtil;

    @Transactional
    public void applyForEvent(String jwt,Integer eventId,String transactionId , String recepientBankAccountNo,String bankName, MultipartFile bankRecieptImage)
    {
        Integer studentId = parseInt(jwtUtil.extractUsername(jwt));
        Member transactionCreator = memberRepository.getReferenceById(studentId);
        Transaction transaction = new Transaction();

        transaction.setId(transactionId);
        transaction.setTransactionCreator(transactionCreator);
        transaction.setReciepentBankAccountNo(recepientBankAccountNo);
        transaction.setBankName(bankName);
        if(bankRecieptImage!=null)
        {
            String imageName = fileUploadService.saveFile(bankRecieptImage ,"bankRecieptImage"+transactionId);
            transaction.setBankReceipt(deployUrl+imagePath+"?imageName="+imageName);
        }
        transaction.setEvent(eventDetailRepository.getReferenceById(eventId));
        transaction.setStatus(1); //debit
        transaction.setValidity(0); // validity checking

        transactionRepository.save(transaction);

    }

    public List<HashMap<String, Object>> getAllRunningRegistrationEvents() {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= eventDetailRepository.getAllRunningRegistrationEvents();
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("eventId",(Integer) ob[0]);
            resultsObj.put("eventName",(String) ob[1]);
            resultsObj.put("eventDate",(Instant) ob[2]);
            resultsObj.put("registrationDeadline",(Instant) ob[3]);
            resultsObj.put("eventVenue",(String) ob[4]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public HashMap<String, Object> getEventDetails(Integer eventId)
    {
        List<Object[]> list= eventDetailRepository.getEventDetails(eventId);

        HashMap<String,Object> resultsObj = new HashMap<>();
        for(Object[] ob:list) {
            resultsObj.put("eventId", (Integer) ob[0]);
            resultsObj.put("eventName", (String) ob[1]);
            resultsObj.put("eventDescription", (String) ob[2]);
            resultsObj.put("eventDate", (Instant) ob[3]);
            resultsObj.put("registrationDeadline", (Instant) ob[4]);
            resultsObj.put("eventVenue", (String) ob[5]);
            resultsObj.put("eventPicture", (String) ob[6]);
            break;
        }
        return resultsObj;
    }
}
