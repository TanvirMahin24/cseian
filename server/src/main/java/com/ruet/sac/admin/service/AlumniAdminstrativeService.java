package com.ruet.sac.admin.service;

import com.ruet.sac.entity.Transaction;
import com.ruet.sac.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public List<HashMap<String, Object>> getAllFilteredPendingAlumniRegistration(String searchText) {
        List<HashMap<String,Object>> resultsArray = new ArrayList<>();

        List<Object[]> list= transactionRepository.getAllFilteredPendingAlumniRegistration(searchText);
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

    public HashMap<String, Object> getPendingAlumniRegistration(String transactionId)
    {
        Object[] ob= transactionRepository.getPendingEventRegistration(transactionId);

        HashMap<String,Object> resultsObj = new HashMap<>();
        resultsObj.put("transactionId",(Integer) ob[0]);
        resultsObj.put("reciepentBankAccountNo",(String) ob[1]);
        resultsObj.put("bankName",(String) ob[2]);
        if((Integer) ob[3] == 1)
            resultsObj.put("transactionStatus","debit");
        else
            resultsObj.put("transactionStatus","credit");

        resultsObj.put("bankReceiptImage",(String) ob[4]);
        resultsObj.put("studentId",(Integer) ob[5]);
        resultsObj.put("studentName",(String) ob[6]);
        resultsObj.put("studentSeries",(String) ob[7]);
        resultsObj.put("studentPicture",(String) ob[8]);
        resultsObj.put("studentContactNo",(String) ob[9]);

        return resultsObj;
    }

    public void approveTransaction(String transactionId)
    {
        Transaction transaction = transactionRepository.getReferenceById(transactionId);
        transaction.setValidity(1);
    }
}
