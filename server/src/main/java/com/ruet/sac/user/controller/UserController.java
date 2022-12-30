package com.ruet.sac.user.controller;

import com.ruet.sac.entity.Member;
import com.ruet.sac.security.AuthenticationRequest;
import com.ruet.sac.security.AuthenticationResponse;
import com.ruet.sac.repository.MemberRepository;
import com.ruet.sac.user.service.EmailService;
import com.ruet.sac.user.service.UserService;
import com.ruet.sac.user.service.VarificationService;
import com.ruet.sac.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;

import static java.lang.Integer.parseInt;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    VarificationService varificationService;

    @Autowired
    EmailService emailService;

    @PostMapping("/register")
    public HashMap<String,Object> registration(@RequestParam("firstName") String firstName ,
                                               @RequestParam("lastName") String lastName ,
                                               @RequestParam("studentId") Integer studentId ,
                                               @RequestParam(name ="email")String email ,
                                               @RequestParam(name ="contactNo")String contactNo ,
                                               @RequestParam(name ="country" ,required=false)String country ,
                                               @RequestParam(name ="city" ,required=false)String city ,
                                               @RequestParam(name ="linkedin" ,required=false)String linkedin ,
                                               @RequestParam(name ="availableTimeToContact")String availableTimeToContact,
                                               @RequestParam(name ="jobField" ,required=false)String jobField ,
                                               @RequestParam(name ="jobTitle" ,required=false)String jobTitle ,
                                               @RequestParam(name ="jobOrganization" ,required=false)String jobOrganization ,
                                               @RequestParam(name ="jobBrunch" ,required=false)String jobBrunch ,
                                               @RequestParam(name ="password")String password ,
                                               @RequestPart (name="memberImage", required = false) MultipartFile image,
                                               @RequestPart (name="documentImage") MultipartFile documentImage)
    {


        Integer userStatus = (alumnusRepository.findStatusByStudentId(studentId)==null) ? 0 :  alumnusRepository.findStatusByStudentId(studentId);

        HashMap<String,Object> returnObj = new HashMap<>();

        if(userStatus==1)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "You already have an account");
            return returnObj;
        }
        if(emailService.isAddressValid(email)==false)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Wrong email address or Email is not acceptable!! ");
            return returnObj;
        }
        try
        {
            userService.registration(firstName+" "+lastName,studentId,email,contactNo,linkedin,country,city,availableTimeToContact,jobField,jobTitle,jobOrganization,jobBrunch,password,image,documentImage);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Registered Successfully");
        } catch (Exception e)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", e.getMessage());
        }
        return returnObj;
    }

    @PostMapping("/verifyEmail")
    public HashMap<String,Object> verifyEmail(@RequestParam("varificationCode") String varificationCode,@RequestParam("userId") Integer userId)
    {
        Integer userStatus = (alumnusRepository.findStatusByStudentId(userId)==null) ? 0 :  alumnusRepository.findStatusByStudentId(userId);

        HashMap<String,Object> returnObj = new HashMap<>();
        if(userStatus==1)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Your Account is already Active");
            return returnObj;
        }

        try
        {
            Integer status = varificationService.checkCode(varificationCode,userId);
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
            returnObj.put("ResponseData", "Please Give Correct Code!");
        }
        return returnObj;
    }

    @PostMapping("/resendVerifyEmail")
    public HashMap<String,Object> resendVerifyEmail(@RequestParam("studentId") Integer studentId)
    {
        Integer userStatus = (alumnusRepository.findStatusByStudentId(studentId)==null) ? 0 :  alumnusRepository.findStatusByStudentId(studentId);

        HashMap<String,Object> returnObj = new HashMap<>();
        if(userStatus==1)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Your Account is already Active");
            return returnObj;
        }

        try
        {
            String email = userService.resendVerifyEmail(studentId);
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull");
            returnObj.put("ResponseData", "Email has sent to "+email+" \n Please check your Inbox or Spam");
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
        Integer userStatus = (alumnusRepository.findStatusByStudentId(studentId)==null) ? 0 :  alumnusRepository.findStatusByStudentId(studentId);

        HashMap<String,Object> returnObj = new HashMap<>();
        if(userStatus==0)
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Your Account isn't Active");
            return returnObj;
        }


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
    MemberRepository alumnusRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        HashMap<String,Object> returnObj = new HashMap<>();
        try
        {
            Integer userStatus = (alumnusRepository.findStatusByStudentId(parseInt(authenticationRequest.getUsername()))==null) ? 0 :  alumnusRepository.findStatusByStudentId(parseInt(authenticationRequest.getUsername()));

            if(userStatus==0)
            {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Feiled ");
                returnObj.put("ResponseData", "Your Account isn't Active");
                return ResponseEntity.ok(returnObj);
            }
            else if(userStatus==1)
            {
                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Feiled ");
                returnObj.put("ResponseData", "Your Account Activation Request is pending");
                return ResponseEntity.ok(returnObj);
            }

            System.out.println(passwordEncoder.encode(authenticationRequest.getPassword()));
            try
            {

                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),authenticationRequest.getPassword()));

            }
            catch (BadCredentialsException e) {

                returnObj.put("ResponseCode", "0");
                returnObj.put("Response", "Feiled ");
                returnObj.put("ResponseData", "Incorrect username or password");
                return ResponseEntity.ok(returnObj);
            }
        }catch (Exception e)
        {

            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Feiled ");
            returnObj.put("ResponseData", "Check parametername or is it null parameter or not");
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

    @PostMapping("/changePassword")
    public HashMap<String,Object> changePassword(@RequestHeader("Authorization") String bearerToken,@RequestParam("oldPassword") String oldPassword,@RequestParam("newPassword") String newPassword)
    {
        String jwt = bearerToken.substring(7);

        HashMap<String,Object> returnObj = new HashMap<>();
        if(userService.changePassword(jwt,oldPassword,newPassword))
        {
            returnObj.put("ResponseCode", "1");
            returnObj.put("Response", "Successfull ");
            returnObj.put("ResponseData", "Your Password is changed!");
            return returnObj;
        }else
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData", "Wrong Password");
        }
        return returnObj;
    }
}
