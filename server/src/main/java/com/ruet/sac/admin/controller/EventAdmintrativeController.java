package com.ruet.sac.admin.controller;

import com.ruet.sac.admin.service.EventAdminstrativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class EventAdmintrativeController {

    @Autowired
    EventAdminstrativeService eventAdminstrativeService;

    @PostMapping("/getAllPendingEventsRegistration")
    public HashMap<String,Object> getAllPendingEventsRegistration(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = eventAdminstrativeService.getAllPendingEventsRegistration();

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

    @PostMapping("/getAllFilteredPendingEventsRegistration")
    public HashMap<String,Object> getAllFilteredPendingEventsRegistration(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber, @RequestParam(name ="searchText") String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = eventAdminstrativeService.getAllFilteredPendingEventsRegistration(searchText);

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

    @PostMapping("/getPendingEventRegistrationById")
    public HashMap<String,Object> getPendingEventRegistration(@RequestParam(name ="transactionId" ,required = true) String transactionId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> result = eventAdminstrativeService.getPendingEventRegistration(transactionId);

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


    @PostMapping("/approveTransaction")
    public HashMap<String,Object> approveTransaction(@RequestParam(name ="transactionId")String transactionId)
    {
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            eventAdminstrativeService.approveTransaction(transactionId);
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
