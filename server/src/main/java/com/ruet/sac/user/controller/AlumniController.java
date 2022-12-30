package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.AlumniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;

@CrossOrigin(origins = "*")
@RestController
public class AlumniController {

    @Autowired
    AlumniService alumniService;
    @PostMapping("/applyForAlumni")
    public HashMap<String,Object> applyForAlumni(@RequestHeader("Authorization") String bearerToken ,
                                                 @RequestParam(name ="transactionId")String transactionId,
                                                 @RequestParam(name ="recepientBankAccountNo")String recepientBankAccountNo,
                                                 @RequestParam(name ="bankName")String bankName,
                                                 @RequestPart (name="bankRecieptImage") MultipartFile bankRecieptImage)
    {
        String jwt = bearerToken.substring(7);
        HashMap<String,Object> returnObj = new HashMap<>();


        try
        {
            alumniService.applyForAlumni(jwt,transactionId,recepientBankAccountNo,bankName,bankRecieptImage);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Successfully Applied");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }
}
