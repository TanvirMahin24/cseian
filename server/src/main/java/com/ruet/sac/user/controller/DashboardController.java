package com.ruet.sac.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class DashboardController {
    @GetMapping("/dashboard")
    public HashMap<String,Object> getComments(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber, @RequestParam(name ="postId") Integer postId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
//            List<HashMap<String,Object>> resultsArray = commentService.getCommentsByPostId(pageNumber,postId);
//
//            returnObj.put("ResponseCode", "1");
//            returnObj.put("Response", "Successfull");
//            returnObj.put("ResponseData", resultsArray);
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
