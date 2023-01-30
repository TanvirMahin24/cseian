package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
@CrossOrigin(origins = "*")
@RestController
public class JobPostController {

    @Autowired
    JobPostService jobPostService;


    @GetMapping("/jobPosts")
    public HashMap<String,Object> getJobPosts(
            @RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber,
            @RequestParam(name ="searchText" ,required = false, defaultValue = "") String searchText,
            @RequestParam(name ="placementType" ,required = false, defaultValue = "") String placementType,
            @RequestParam(name ="durationType" ,required = false, defaultValue = "") String durationType){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> results = jobPostService.getJobPosts(pageNumber,searchText,durationType,placementType);

            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", results);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/jobPosts")
    public HashMap<String,Object> savePost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postTitle" )String postTitle ,
                                           @RequestParam(name ="companyName" )String companyName ,
                                           @RequestParam(name ="location" )String location ,
                                           @RequestParam(name ="deadline" ) String deadline ,
                                           @RequestParam(name ="durationType" )String durationType ,
                                           @RequestParam(name ="placementType" )String placementType ,
                                           @RequestParam(name ="description" ,required = false )String description ,
                                           @RequestParam(name ="applicationlink" ,required = false )String applicationlink )
    {

        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            jobPostService.saveJobPost(jwt,postTitle,companyName,location,deadline,durationType,placementType,description,applicationlink);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Added Your Job Post");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }


    @DeleteMapping("/jobPosts")
    public HashMap<String,Object> deletePost(@RequestHeader("Authorization") String bearerToken ,
                                             @RequestParam(name ="jobPostId" ,required=true)Integer jobPostId)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(jobPostService.deleteJobPost(jwt,jobPostId))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Deleted Your Job Post");
            }
            else
            {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Failed");
                returnObj.put("ResponseData", "illigal action!!");
            }

        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
