package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class JobPostController {

    @Autowired
    JobPostService jobPostService;

    @PostMapping("/jobPosts")
    public HashMap<String,Object> getPosts(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = jobPostService.getAllJobPosts(pageNumber);

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

    @PostMapping("/searchJobPosts")
    public HashMap<String,Object> getFilteredPosts(@RequestParam(name ="searchText" ) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = jobPostService.getFilteredJobPosts(searchText);

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

    @PostMapping("/addJobPost")
    public HashMap<String,Object> savePost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postTitle" )String postTitle ,
                                           @RequestParam(name ="companyName" )String companyName ,
                                           @RequestParam(name ="location" )String location ,
                                           @RequestParam(name ="deadline" ) LocalDate deadline ,
                                           @RequestParam(name ="durationType" )String durationType ,
                                           @RequestParam(name ="placementType" )String placementType ,
                                           @RequestParam(name ="description" )String description ,
                                           @RequestParam(name ="applicationlink" )String applicationlink )
    {
        //String jwt,String postTitle , String companyName, String location,
        // LocalDate deadline, String durationType,String placementType, String description,String applicationlink
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


    @PostMapping("/deleteJobPost")
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
