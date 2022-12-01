package com.ruet.sac.controller;

import com.ruet.sac.entity.Member;
import com.ruet.sac.security.AuthenticationRequest;
import com.ruet.sac.security.AuthenticationResponse;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.service.UserService;
import com.ruet.sac.service.VarificationService;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

import static java.lang.Integer.parseInt;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    VarificationService varificationService;

    @PostMapping("/register")
    public HashMap<String,Object> registration(@RequestParam("name") String name ,
                                           @RequestParam("studentId") Integer studentId ,
                                           @RequestParam(name ="jobField" ,required=false)String jobField ,
                                           @RequestParam(name ="jobTitle" ,required=false)String jobTitle ,
                                           @RequestParam(name ="jobOrganization" ,required=false)String jobOrganization ,
                                           @RequestParam(name ="jobBrunch" ,required=false)String jobBrunch ,
                                           @RequestParam(name ="email")String email ,
                                           @RequestParam(name ="contactNo")String contactNo ,
                                           @RequestParam(name ="linkedin" ,required=false)String linkedin ,
                                           @RequestParam(name ="availableTimeToContact")String availableTimeToContact,
                                           @RequestParam(name ="password")String password )
    {
        HashMap<String,Object> returnObj = new HashMap<>();
        try
        {
            userService.registration(name,studentId,jobField,jobTitle,jobOrganization,jobBrunch,email,contactNo,linkedin,availableTimeToContact,password);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Registered Successfully");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong. Email may be incorrect!!");
        }
        return returnObj;
    }

    @PostMapping("/verifyEmail")
    public HashMap<String,Object> verifyEmail(@RequestParam("varificationCode") String varificationCode)
    {
        HashMap<String,Object> returnObj = new HashMap<>();
        try
        {
            Integer status = varificationService.checkCode(varificationCode);
            if(status==1)
            {
                returnObj.put("ResponseCode", "1");
                returnObj.put("Response", "Successfull");
                returnObj.put("ResponseData", "Your account is activated!!");
            } else if (status==2) {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Failed");
                returnObj.put("ResponseData", "Code is Expired");
            }
            else {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Failed");
                returnObj.put("ResponseData", "Code is not valid");
            }

        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @PostMapping("/forgotPassword")
    public HashMap<String,Object> recoverPassword(@RequestParam("studentId") Integer studentId)
    {
        HashMap<String,Object> returnObj = new HashMap<>();
        try
        {
            String email = userService.forgotPassword(studentId);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Password recovery email has sent to "+email+" \n Please check your Inbox or Spam");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Something Went Wrong");
        }
        return returnObj;
    }

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    AlumnusRepository alumnusRepository;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        HashMap<String,Object> returnObj = new HashMap<>();

        Integer userStatus = alumnusRepository.findStatusByStudentId(parseInt(authenticationRequest.getUsername()));

        if(userStatus==0)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Your Account isn't Active");
            return ResponseEntity.ok(returnObj);
        }

        try
        {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e) {

            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Incorrect username or password");
            return ResponseEntity.ok(returnObj);
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        Member m = alumnusRepository.getReferenceById(parseInt(authenticationRequest.getUsername()));

        HashMap<String,Object> resultObj = new HashMap<>();
        resultObj.put("memberName" , m.getName());
        resultObj.put("memberId", m.getId());
        resultObj.put("authToken" ,new AuthenticationResponse(jwt));

        returnObj.put("ResponseCode", "1");
        returnObj.put("Response", "Successfull");
        returnObj.put("ResponseData", resultObj);

        return ResponseEntity.ok(returnObj);
    }
}
