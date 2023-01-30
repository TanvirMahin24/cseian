package com.ruet.sac.user.controller;

import com.ruet.sac.user.service.SeriesInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class SeriesInfoController {
    @Autowired
    SeriesInfoService seriesInfoService;


    @GetMapping("/users")
    public HashMap<String,Object> users(@RequestParam(name ="pageNumber" ,required = false, defaultValue = "0") Integer pageNumber,@RequestParam(name ="searchText" ,required = false) String searchText){
        HashMap<String,Object> returnObj = new HashMap<>();

        try {
            HashMap<String,Object> results = seriesInfoService.users(pageNumber,searchText);

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
}
