package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.DashboardSearvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class DashboardController {

    @Autowired
    DashboardSearvice dashboardSearvice;

    @GetMapping("/dashboard")
    public HashMap<String,Object> getComments(){

        HashMap<String,Object> returnObj = new HashMap<>();


        try {
            HashMap<String,Object> resultsObj = dashboardSearvice.getDashboardData();

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsObj);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @GetMapping("/dashboardMembers")
    public HashMap<String,Object> dashboardMembers(){

        HashMap<String,Object> returnObj = new HashMap<>();


        try {
            List<HashMap<String, Object>> resultsObj = dashboardSearvice.getDashboardMember();

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", resultsObj);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
