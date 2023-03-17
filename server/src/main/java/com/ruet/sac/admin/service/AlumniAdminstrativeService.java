package com.ruet.sac.admin.service;

import com.ruet.sac.entity.Transaction;
import com.ruet.sac.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class AlumniAdminstrativeService {

    @Autowired
    TransactionRepository transactionRepository;


    public List<HashMap<String, Object>> getAllPendingAlumniRegistration() {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= transactionRepository.getAllPendingAlumniRegistration();
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("transactionId",(Integer) ob[0]);
            resultsObj.put("reciepentBankAccountNo",(String) ob[1]);
            resultsObj.put("bankName",(String) ob[2]);
            if((Integer) ob[3] == 1)
                resultsObj.put("transactionStatus","debit");
            else
                resultsObj.put("transactionStatus","credit");
            resultsObj.put("studentId",(Integer) ob[4]);
            resultsObj.put("studentName",(String) ob[5]);
            resultsObj.put("studentPicture",(String) ob[6]);
            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public HashMap<String, Object> getAllFilteredPendingAlumniRegistration(Integer pageNumber , String searchText) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        Page<Object[]> list= transactionRepository.getAllFilteredPendingAlumniRegistration(PageRequest.of(pageNumber,10),searchText);
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
            resultsArray.add(resultsObj);
        }

        HashMap<String,Object> results = new HashMap();
        Integer pageCount = list.getTotalPages();//jobPostRepository.getPageCountOfJobPosts(pageLimit,searchText);
        results.put("pageCount",pageCount);
        results.put("pageNumber",pageNumber);
        results.put("pageContent",resultsArray);
        return results;

    }

    public HashMap<String, Object> getPendingAlumniRegistration(String transactionId)
    {
        List<Object[]> res= transactionRepository.getPendingEventRegistration(transactionId);

        HashMap<String,Object> resultsObj = new HashMap<>();
        for(Object[] ob : res)
        {
            resultsObj.put("transactionId",  (Object) ob[0]);
            resultsObj.put("reciepentBankAccountNo", ob[1]);
            resultsObj.put("bankName",ob[2]);
            if((Integer) ob[3] == 1)
                resultsObj.put("transactionStatus","debit");
            else
                resultsObj.put("transactionStatus","credit");

            resultsObj.put("bankReceiptImage",ob[4]);
            resultsObj.put("studentId", ob[5]);
            resultsObj.put("studentName", ob[6]);
            resultsObj.put("studentSeries", ob[7]);
            resultsObj.put("studentPicture", ob[8]);
            resultsObj.put("studentContactNo", ob[9]);
            break;
        }



        return resultsObj;
    }

    public void approveTransaction(String transactionId)
    {
        Transaction transaction = transactionRepository.getReferenceById(transactionId);
        transaction.setValidity(1);
        transactionRepository.save(transaction);
    }
}
