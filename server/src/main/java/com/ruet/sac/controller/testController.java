package com.ruet.sac.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {





    @GetMapping("/")
    public String get(){
        return "Hello!";
    }

}
