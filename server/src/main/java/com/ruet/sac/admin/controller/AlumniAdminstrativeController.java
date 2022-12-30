package com.ruet.sac.admin.controller;

import com.ruet.sac.admin.service.AlumniAdminstrativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AlumniAdminstrativeController {

    @Autowired
    AlumniAdminstrativeService alumniAdminstrativeService;

    @PostMapping("/getAllPendingAlumniRegistration")
    public HashMap<String,Object> getAllPendingAlumniRegistration(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = alumniAdminstrativeService.getAllPendingAlumniRegistration();

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

    @PostMapping("/getAllFilteredPendingAlumniRegistration")
    public HashMap<String,Object> getAllFilteredPendingAlumniRegistration(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber, @RequestParam(name ="searchText") String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = alumniAdminstrativeService.getAllFilteredPendingAlumniRegistration(searchText);

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

    @PostMapping("/getPendingAlumniRegistrationById")
    public HashMap<String,Object> getPendingAlumniRegistrationById(@RequestParam(name ="transactionId" ,required = true) String transactionId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> result = alumniAdminstrativeService.getPendingAlumniRegistration(transactionId);

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


    @PostMapping("/approveAlumniRegistrationTransaction")
    public HashMap<String,Object> approveAlumniRegistrationTransaction(@RequestParam(name ="transactionId")String transactionId)
    {
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            alumniAdminstrativeService.approveTransaction(transactionId);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Approved");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
