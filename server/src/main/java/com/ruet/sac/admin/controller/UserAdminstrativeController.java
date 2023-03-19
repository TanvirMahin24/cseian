package com.ruet.sac.admin.controller;

import com.ruet.sac.admin.service.UserAdminstrativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserAdminstrativeController {

    @Autowired
    UserAdminstrativeService userAdminstrativeService;


    @GetMapping("/PendingMemberApplicationList")
    public HashMap<String,Object> getFilteredPendingMemberList(@RequestParam(name ="searchText" ,required = false) String searchText){
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

    @GetMapping("/pendingMemberApplicationDetails")
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

    @PostMapping("/rejectPendingMember")
    public HashMap<String,Object> rejectPendingMember(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            userAdminstrativeService.rejectPendingMember(studentId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Rejected!!");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }





    @GetMapping("/MemberList")
    public HashMap<String,Object> getFilteredMemberList(@RequestParam(name ="searchText" ,required = false) String searchText){
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

    @GetMapping("/MemberDetails")
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
