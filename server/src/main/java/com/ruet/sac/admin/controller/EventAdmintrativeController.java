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

    @PostMapping("/createEvent")
    public HashMap<String,Object> createEvent(@RequestParam(name ="eventName") String eventName ,
                                              @RequestParam(name ="eventDescription") String eventDescription,
                                              @RequestParam(name ="eventDate") String eventDate,
                                              @RequestParam(name ="deadline") String deadline,
                                              @RequestParam(name ="eventVanue") String eventVanue,
                                              @RequestPart(name ="eventPicture") MultipartFile eventPicture,
                                              @RequestParam(name ="status") Integer status  ){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            eventAdminstrativeService.createEvent(eventName,eventDescription,eventDate,deadline,eventVanue,eventPicture,status);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "SUccessfully event created!!");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @GetMapping("/PendingEventsRegistrationList")
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

    @GetMapping("/PendingEventRegistrationDetails")
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

    @PostMapping("/rejectTransaction")
    public HashMap<String,Object> rejectTransaction(@RequestParam(name ="transactionId")String transactionId)
    {
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            eventAdminstrativeService.rejectTransaction(transactionId);
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
