package com.ruet.sac.admin.service;

import com.ruet.sac.entity.*;
import com.ruet.sac.repository.EventDetailRepository;
import com.ruet.sac.repository.TableRegistryRepository;
import com.ruet.sac.repository.TransactionRepository;
import com.ruet.sac.user.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static java.lang.Integer.parseInt;

@Service
public class EventAdminstrativeService {

    @Value("${deploy.url}") String deployUrl ;
    @Value("${imageResourse.path}") String imagePath ;

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    EventDetailRepository eventDetailRepository;

    @Autowired
    TableRegistryRepository tableRegistryRepository;

    @Autowired
    FileUploadService fileUploadService;


    @Transactional
    public void createEvent(String eventName , String eventDescription, String eventDate, String deadline, String eventVanue, MultipartFile eventPicture, Integer status )
    {

        // get Primary key of event_details table
        TableRegistry r = tableRegistryRepository.getReferenceById(8);
        Integer id = r.getRegistryKey() + 1;
        r.setRegistryKey(id);
        tableRegistryRepository.save(r);

        EventDetail eventDetail= new EventDetail();
        eventDetail.setId(id);
        eventDetail.setEventName(eventName);
        eventDetail.setEventDescription(eventDescription);
        eventDetail.setEventDate(Instant.parse(eventDate));
        eventDetail.setRegistrationDeadline(Instant.parse(deadline));
        eventDetail.setEventVenue(eventVanue);
        if(eventPicture!=null)
        {
            String imageName = fileUploadService.saveFile(eventPicture ,"eventImage"+id);
            eventDetail.setEventPicture(deployUrl+imagePath+"?imageName="+imageName);
        }

        eventDetail.setStatus(status);

        eventDetailRepository.save(eventDetail);


    }

    public List<HashMap<String, Object>> getAllFilteredPendingEventsRegistration(String searchText) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= transactionRepository.getAllFilteredPendingEventsRegistration(searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("transactionId",(String) ob[0]);
            resultsObj.put("reciepentBankAccountNo",(String) ob[1]);
            resultsObj.put("bankName",(String) ob[2]);
            if((Integer) ob[3] == 1)
                resultsObj.put("transactionStatus","debit");
            else
                resultsObj.put("transactionStatus","credit");
            resultsObj.put("studentId",(Integer) ob[4]);
            resultsObj.put("studentName",(String) ob[5]);
            resultsObj.put("studentPicture",(String) ob[6]);
            resultsObj.put("eventName",(String) ob[7]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public HashMap<String, Object> getPendingEventRegistration(String transactionId)
    {
        List<Object[]> list= transactionRepository.getPendingEventRegistration(transactionId);

        HashMap<String,Object> resultsObj = new HashMap<>();
        for(Object[] ob:list ) {
            resultsObj.put("transactionId", (String) ob[0]);
            resultsObj.put("reciepentBankAccountNo", (String) ob[1]);
            resultsObj.put("bankName", (String) ob[2]);
            if ((Integer) ob[3] == 1)
                resultsObj.put("transactionStatus", "debit");
            else
                resultsObj.put("transactionStatus", "credit");

            resultsObj.put("bankReceiptImage", (String) ob[4]);
            resultsObj.put("studentId", (Integer) ob[5]);
            resultsObj.put("studentName", (String) ob[6]);
            resultsObj.put("studentSeries", (String) ob[7]);
            resultsObj.put("studentPicture", (String) ob[8]);
            resultsObj.put("studentContactNo", (String) ob[9]);
            resultsObj.put("eventId", (Integer) ob[10]);
            resultsObj.put("eventName", (String) ob[11]);
            resultsObj.put("eventDate", (LocalDate) ob[12]);
            break;
        }

        return resultsObj;
    }

    public void approveTransaction(String transactionId)
    {
        Transaction transaction = transactionRepository.getReferenceById(transactionId);
        transaction.setValidity(1);
    }

    public void rejectTransaction(String transactionId) {
        transactionRepository.deleteById(transactionId);
    }
}
