package com.ruet.sac.controller;

import com.ruet.sac.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/posts")
    public HashMap<String,Object> getPosts(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = postService.getAllPosts(pageNumber);

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

    @PostMapping("/searchPosts")
    public HashMap<String,Object> getFilteredPosts(@RequestParam(name ="searchText" ) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = postService.getFilteredPosts(searchText);

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

    @PostMapping("/addPost")
    public HashMap<String,Object> savePost(@RequestParam("postWonerId") Integer postWonerId ,                                           @RequestParam(name ="description" ,required=false)String description ,
                                           @RequestPart (name="image", required = false) MultipartFile image,
                                           @RequestParam(name ="postDescription")String postDescription )
    {
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            postService.savePost(postWonerId,postDescription,image);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Added Your Post");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
