package com.ruet.sac.controller;

import com.ruet.sac.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @PostMapping("/profileInfo")
    public HashMap<String,Object> getPosts(@RequestParam(name ="studentId" ,required = true) Integer studentId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> resultsArray = profileService.getProfileInfo(studentId);

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
    @CrossOrigin(origins = "*")
    @PostMapping("/leftJob")
    public HashMap<String,Object> leftJob(@RequestHeader("Authorization") String bearerToken, @RequestParam(name ="jobId" ,required = true) Integer jobId){

        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            if(profileService.leftJob(jwt,jobId))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Updated");
            }
            else
            {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Failed");
                returnObj.put("ResponseData", "Illigal Action");
            }


        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/addJob")
    public HashMap<String,Object>addJob(@RequestHeader("Authorization") String bearerToken,
                                        @RequestParam(name ="jobField" ,required = true)String jobField,
                                        @RequestParam(name ="jobTitle" ,required = true) String jobTitle ,
                                        @RequestParam(name ="jobOrganization" ,required = true) String jobOrganization ,
                                        @RequestParam(name ="jobBrunch" ,required = false) String jobBrunch)
    {

        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            profileService.addJob(jwt,jobField,jobTitle,jobOrganization,jobBrunch);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Updated");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
