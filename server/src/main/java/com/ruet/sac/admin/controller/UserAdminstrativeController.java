package com.ruet.sac.admin.controller;

import com.ruet.sac.admin.service.UserAdminstrativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserAdminstrativeController {

    @Autowired
    UserAdminstrativeService userAdminstrativeService;

    @PostMapping("/pendingMemberList")
    public HashMap<String,Object> getPendingMemberList(){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = userAdminstrativeService.getPendingMemberList();

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsArray);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/filteredPendingMemberList")
    public HashMap<String,Object> getFilteredPendingMemberList(@RequestParam(name ="searchText" ,required = true) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = userAdminstrativeService.getFilteredPendingMemberList(searchText);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsArray);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/pendingMember")
    public HashMap<String,Object> getPendingMember(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> result = userAdminstrativeService.getPendingMember(studentId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", result);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/activePendingMember")
    public HashMap<String,Object> activePendingMember(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            userAdminstrativeService.activePendingMember(studentId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Activated!!");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }



    @PostMapping("/memberList")
    public HashMap<String,Object> getMemberList(){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = userAdminstrativeService.getMemberList();

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsArray);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/filteredMemberList")
    public HashMap<String,Object> getFilteredMemberList(@RequestParam(name ="searchText" ,required = true) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = userAdminstrativeService.getFilteredMemberList(searchText);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsArray);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/getMember")
    public HashMap<String,Object> getMember(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> result = userAdminstrativeService.getMember(studentId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", result);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/banMember")
    public HashMap<String,Object> banMember(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            userAdminstrativeService.banMember(studentId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Banned!!");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/assignRoleToMember")
    public HashMap<String,Object> assignRoleToMember(@RequestParam(name ="studentId" ,required = true) Integer studentId,@RequestParam(name ="roleId" ,required = true) Integer roleId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            userAdminstrativeService.assignRoleToMember(studentId,roleId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Role Assigned!!");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
