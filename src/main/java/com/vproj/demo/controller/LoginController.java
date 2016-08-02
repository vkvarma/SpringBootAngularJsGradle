package com.vproj.demo.controller;

import com.vproj.demo.model.Login;
import com.vproj.demo.service.LoginService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author vivek krishna varma
 */

@RestController
public class LoginController {
    
    @Autowired
    LoginService loginService;
    
    //-------------------Validate candidates login--------------------------------------------------------
   
    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<Boolean> validate(@RequestBody Login login ) {
        //boolean loginSuccess = loginService.validateLogin(login.getUsername(), login.getPassword());
    	
    	//String str = SecurityContextHolder.getContext().getAuthentication().getName(); 
    			
        return new ResponseEntity<>(login.isAuthenticated(), HttpStatus.OK);
    }
}