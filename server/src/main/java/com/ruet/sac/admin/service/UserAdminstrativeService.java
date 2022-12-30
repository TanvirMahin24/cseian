package com.ruet.sac.admin.service;

import com.ruet.sac.entity.Member;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class UserAdminstrativeService {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    RoleRepository roleRepository;
    public List<HashMap<String,Object>> getPendingMemberList() {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();
        List<Object[]> list= memberRepository.getPendingMemberList();
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("StudentId",(Integer) ob[0]);
            resultsObj.put("studentName",(String) ob[1]);
            resultsObj.put("studentPicture",(String) ob[2]);
            resultsObj.put("studentContactNo",(String) ob[3]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public List<HashMap<String,Object>> getFilteredPendingMemberList(String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();
        List<Object[]> list= memberRepository.getFilteredPendingMemberList(searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("StudentId",(Integer) ob[0]);
            resultsObj.put("studentName",(String) ob[1]);
            resultsObj.put("studentPicture",(String) ob[2]);
            resultsObj.put("studentContactNo",(String) ob[3]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public HashMap<String,Object> getPendingMember(Integer studentId) {

        HashMap<String,Object> resultsObj = new HashMap<>();

        Object[] ob= memberRepository.getPendingMember(studentId);

        resultsObj.put("StudentId",(Integer) ob[0]);
        resultsObj.put("studentSeries",(Integer) ob[1]);
        resultsObj.put("studentName",(String) ob[2]);
        resultsObj.put("studentPicture",(String) ob[3]);
        resultsObj.put("studentDocumentPicture",(String) ob[4]);
        resultsObj.put("studentCountry",(String) ob[5]);
        resultsObj.put("studentCity",(String) ob[6]);
        resultsObj.put("studentEmail",(String) ob[7]);
        resultsObj.put("studentContactNo",(String) ob[8]);

        return resultsObj;
    }

    public List<HashMap<String,Object>> getMemberList() {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();
        List<Object[]> list= memberRepository.getMemberList();
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("StudentId",(Integer) ob[0]);
            resultsObj.put("studentName",(String) ob[1]);
            resultsObj.put("studentPicture",(String) ob[2]);
            resultsObj.put("studentContactNo",(String) ob[3]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public List<HashMap<String,Object>> getFilteredMemberList(String searchText) {

        List<HashMap<String,Object>> resultsArray = new ArrayList<>();
        List<Object[]> list= memberRepository.getFilteredMemberList(searchText);
        for (Object[] ob : list) {

            HashMap<String,Object> resultsObj = new HashMap<>();
            resultsObj.put("StudentId",(Integer) ob[0]);
            resultsObj.put("studentName",(String) ob[1]);
            resultsObj.put("studentPicture",(String) ob[2]);
            resultsObj.put("studentContactNo",(String) ob[3]);

            resultsArray.add(resultsObj);
        }
        return resultsArray;
    }

    public HashMap<String,Object> getMember(Integer studentId) {

        HashMap<String,Object> resultsObj = new HashMap<>();

        Object[] ob= memberRepository.getMember(studentId);

        resultsObj.put("StudentId",(Integer) ob[0]);
        resultsObj.put("studentSeries",(Integer) ob[1]);
        resultsObj.put("studentName",(String) ob[2]);
        resultsObj.put("studentPicture",(String) ob[3]);
        resultsObj.put("studentDocumentPicture",(String) ob[4]);
        resultsObj.put("studentCountry",(String) ob[5]);
        resultsObj.put("studentCity",(String) ob[6]);
        resultsObj.put("studentEmail",(String) ob[7]);
        resultsObj.put("studentContactNo",(String) ob[8]);

        return resultsObj;
    }

    public void activePendingMember(Integer studentId)
    {
        Member member = memberRepository.getReferenceById(studentId);
        member.setUserRole(roleRepository.getReferenceById(3));
        memberRepository.save(member);
    }

    public void banMember(Integer studentId)
    {
        Member member = memberRepository.getReferenceById(studentId);
        member.setUserRole(roleRepository.getReferenceById(2));
        memberRepository.save(member);
    }

    public void assignRoleToMember(Integer studentId,Integer roleId)
    {
        Member member = memberRepository.getReferenceById(studentId);
        member.setUserRole(roleRepository.getReferenceById(roleId));
        memberRepository.save(member);
    }
}
