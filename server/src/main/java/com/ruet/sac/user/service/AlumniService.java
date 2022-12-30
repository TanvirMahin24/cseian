package com.ruet.sac.user.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.TableRegistry;
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

import static java.lang.Integer.parseInt;

@Service
public class AlumniService {

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
    public void applyForAlumni(String jwt,String transactionId , String recepientBankAccountNo,String bankName, MultipartFile bankRecieptImage)
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
        transaction.setEvent(eventDetailRepository.getReferenceById(1));
        transaction.setStatus(1); //debit
        transaction.setValidity(0); // validity checking

        transactionRepository.save(transaction);

    }
}
