package com.ruet.sac.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.entity.VarficationCode;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.repository.RoleRepository;
import com.ruet.sac.repository.VarficationCodeRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class VarificationService {

    @Autowired
    VarficationCodeRepository varficationCodeRepository;

    @Autowired
    AlumnusRepository alumnusRepository;

    @Autowired
    RoleRepository roleRepository;

    public String generateCode(Integer studentId)
    {
        String randomCode = RandomString.make(6);
        VarficationCode varficationCode = new VarficationCode();
        varficationCode.setCode(randomCode);
        varficationCode.setUserId(studentId);
        varficationCode.setTime(Instant.now());
        varficationCodeRepository.save(varficationCode);
        return randomCode;
    }

    @Transactional
    public Integer checkCode(String code)
    {
        VarficationCode varficationCode = varficationCodeRepository.getVarficationCodeInf(code);

        Instant timeToDetete = Instant.now().minusSeconds(18000);
        try{
            varficationCodeRepository.deleteCodes(timeToDetete);
        }catch (Exception e)
        {
            System.out.println(e);
        }


        if(varficationCode!=null)
        {
            varficationCodeRepository.deleteById(varficationCode.getId());
            Instant timeNow = Instant.now().minusSeconds(300);
            Instant time = varficationCode.getTime();
            if(timeNow.compareTo(time)<=0)
            {
                Member member = alumnusRepository.getReferenceById(varficationCode.getUserId());
                member.setUserRole(roleRepository.getReferenceById(1));

                alumnusRepository.save(member);

                return 1;
            }
            else return 2;
        }
        return 0;
    }
}
