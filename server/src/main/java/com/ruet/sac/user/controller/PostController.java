package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.PostService;
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

    @GetMapping("/posts")
    public HashMap<String,Object> getFilteredPosts(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber,@RequestParam(name ="searchText" ,required = false, defaultValue = "" ) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = postService.getFilteredPosts(pageNumber,searchText);

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

    @GetMapping("/post")
    public HashMap<String,Object> getPostById(@RequestParam(name ="postId" ) Integer postId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> result = postService.getPostById(postId);

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

    @PostMapping("/post")
    public HashMap<String,Object> savePost(@RequestHeader("Authorization") String bearerToken ,                                           @RequestParam(name ="description" ,required=false)String description ,
                                           @RequestPart (name="image", required = false) MultipartFile image,
                                           @RequestParam(name ="postDescription")String postDescription,
                                           @RequestParam(name ="postTitle")String postTitle)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            postService.savePost(jwt,postDescription,image,postTitle);
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

    @PatchMapping("/post")
    public HashMap<String,Object> editPost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postId" ,required=true)Integer postId ,
                                           @RequestPart (name="image", required = false) MultipartFile image,
                                           @RequestParam(name ="postTitle")String postTitle,
                                           @RequestParam(name ="postDescription" , required = false)String postDescription )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(postService.editPost(jwt,postId,postDescription,image,postTitle))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Updated Your Post");
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

    @DeleteMapping("/post")
    public HashMap<String,Object> deletePost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postId" ,required=true)Integer postId)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(postService.deletePost(jwt,postId))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Deleted Your Post");
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
