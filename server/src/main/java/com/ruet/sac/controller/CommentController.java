package com.ruet.sac.controller;

import com.ruet.sac.repository.CommentRepository;
import com.ruet.sac.service.CommentService;
import com.ruet.sac.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CommentController {
    @Autowired
    CommentService commentService;

    @PostMapping("/comments")
    public HashMap<String,Object> getPosts(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber,@RequestParam(name ="postId") Integer postId){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = commentService.getCommentsByPostId(pageNumber,postId);

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


    @PostMapping("/addComment")
    public HashMap<String,Object> savePost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="postId")Integer postId,
                                           @RequestParam(name ="commentDescription")String commentDescription )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            commentService.saveComment(jwt,postId,commentDescription);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Added Your Comment");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/editComment")
    public HashMap<String,Object> editPost(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestPart (name="commentId", required = false) Integer commentId,
                                           @RequestParam(name ="commentDescription" , required = false)String commentDescription )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(commentService.editComment(jwt,commentId,commentDescription))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Updated Your Comment");
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

    @PostMapping("/deleteComment")
    public HashMap<String,Object> deletePost(@RequestHeader("Authorization") String bearerToken ,
                                             @RequestParam(name ="commentId" ,required=true)Integer commentId)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(commentService.deleteComment(jwt,commentId))
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Successfully Deleted Your Comment");
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
