package com.vproj.demo.service.impl;

import com.vproj.demo.model.Login;
import com.vproj.demo.service.LoginService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author vivek krishna varma
 */

@Service("loginService")
@Transactional
public class LoginServiceImpl implements LoginService {

    @Override
    public boolean validateLogin(String username,String password) {
    
       return true;
    }  
    
    @Override
    public Login getAppSessionId() { 
       Login login = new Login();
       login.setSessionId("abcd1234");
       return login;
    }   
}