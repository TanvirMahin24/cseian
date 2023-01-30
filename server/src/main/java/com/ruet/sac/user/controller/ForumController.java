package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ForumController {
    @Autowired
    ForumService forumService;

    @GetMapping("/faqs/answererd")
    public HashMap<String,Object> getAllFaqsWithAnswer(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = forumService.getAllFaqsWithAnswer(pageNumber);

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

    @GetMapping("/faqs/unanswererd")
    public HashMap<String,Object> getPosts(
            @RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            List<HashMap<String,Object>> resultsArray = forumService.getAllFaqsWithoutAnswer(pageNumber);

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

    @PostMapping("/faqs/question")
    public HashMap<String,Object> askQuestion(@RequestHeader("Authorization") String bearerToken ,
                                           @RequestParam(name ="question")String question )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            forumService.addFaq(jwt,question);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Added Your Question");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/faqs/answer")
    public HashMap<String,Object> answeringQuestion(@RequestHeader("Authorization") String bearerToken ,
                                                    @RequestParam(name ="faqId" ,required=true)Integer faqId ,
                                                     @RequestParam(name ="answer")String answer )
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            forumService.addAnswer(jwt,faqId,answer);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Added Your Answer");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }



    @DeleteMapping("/faqs")
    public HashMap<String,Object> deletePost(@RequestHeader("Authorization") String bearerToken ,
                                             @RequestParam(name ="faqId" ,required=true)Integer faqId)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            if(forumService.deleteFaq(jwt,faqId))
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
