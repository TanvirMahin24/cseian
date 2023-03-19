package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class EventController {
    @Autowired
    EventService eventService;

    @GetMapping("/events/running")
    public HashMap<String,Object> getAllRunningRegistrationEvents(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = eventService.getAllRunningRegistrationEvents();

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

    @GetMapping("/events/running/details")
    public HashMap<String,Object> getEventDetails(@RequestParam(name ="eventId" ,required = true) Integer eventId){
        HashMap<String,Object> returnObj = new HashMap<>();

//        try {
            HashMap<String,Object> result = eventService.getEventDetails(eventId);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", result);
//        } catch (Exception e)
//        {
//            returnObj.put("ResponseCode", "0");
//            returnObj.put("Response", "Failed");
//            returnObj.put("ResponseData", "Something Went Wrong");
//        }
        return returnObj;
    }


    @PostMapping("/events/registration")
    public HashMap<String,Object> applyForAlumni(@RequestHeader("Authorization") String bearerToken ,
                                                 @RequestParam(name ="eventId")Integer eventId,
                                                 @RequestParam(name ="transactionId")String transactionId,
                                                 @RequestParam(name ="recepientBankAccountNo")String recepientBankAccountNo,
                                                 @RequestParam(name ="bankName")String bankName,
                                                 @RequestPart (name="bankRecieptImage") MultipartFile bankRecieptImage)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            eventService.applyForEvent(jwt,eventId,transactionId,recepientBankAccountNo,bankName,bankRecieptImage);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Applied");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
