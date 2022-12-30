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
    public HashMap<String,Object> savePost(@RequestHeader("Authorization") String bearerToken ,                                           @RequestParam(name ="description" ,required=false)String description ,
                                           @RequestPart (name="image", required = false) MultipartFile image,
                                           @RequestParam(name ="postDescription")String postDescription )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            postService.savePost(jwt,postDescription,image);
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

    @PostMapping("/editPost")
    public HashMap<String,Object> editPost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postId" ,required=true)Integer postId ,
                                           @RequestPart (name="image", required = false) MultipartFile image,
                                           @RequestParam(name ="postDescription" , required = false)String postDescription )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(postService.editPost(jwt,postId,postDescription,image))
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

    @PostMapping("/deletePost")
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
