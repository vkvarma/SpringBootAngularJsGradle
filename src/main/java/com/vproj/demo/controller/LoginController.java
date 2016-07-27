package com.vproj.demo.controller;

import com.vproj.demo.model.Login;
import com.vproj.demo.service.LoginService;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author vivek krishna varma
 */

@RestController
public class LoginController {
    
    @Autowired
    LoginService loginService;
    
    //-------------------get application session key--------------------------------------------------------
    @RequestMapping(value = "/login/", method = RequestMethod.GET)
    public ResponseEntity<Login> getAppSessionId() {
        
        Login login = loginService.getAppSessionId();
        if(StringUtils.isBlank(login.getSessionId())) {            
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(login, HttpStatus.OK);
    }
    
    //-------------------Validate candidates login--------------------------------------------------------
    @RequestMapping(value = "/login/{username}/{password}", method = RequestMethod.POST)
    public ResponseEntity<Boolean> validate(@PathVariable("username") String user,@PathVariable("password") String pass) {
        
        boolean loginSuccess = loginService.validateLogin(user, pass);
        if (!loginSuccess) {            
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(loginSuccess, HttpStatus.OK);
    }
}