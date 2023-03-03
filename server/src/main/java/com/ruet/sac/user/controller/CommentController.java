package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CommentController {
    @Autowired
    CommentService commentService;

    @GetMapping("/comments")
    public HashMap<String,Object> getComments(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber,@RequestParam(name ="postId") Integer postId){
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


    @PostMapping("/comment")
    public HashMap<String,Object> saveComment(@RequestHeader("Authorization") String bearerToken ,
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

    @PatchMapping("/comment")
    public HashMap<String,Object> editComment(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam (name="commentId") Integer commentId,
                                           @RequestParam(name ="commentDescription")String commentDescription )
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

    @DeleteMapping("/comment")
    public HashMap<String,Object> deleteComment(@RequestHeader("Authorization") String bearerToken ,
                                             @RequestParam(name ="commentId" ,required=true)Integer commentId)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


//        try
//        {
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

//        } catch (Exception e)
//        {
//            returnObj.put("ResponseCode", "0");
//            returnObj.put("Response", "Failed");
//            returnObj.put("ResponseData", "Something Went Wrong");
//        }
        return returnObj;
    }
}

