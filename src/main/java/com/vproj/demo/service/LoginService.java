package com.vproj.demo.service;

import com.vproj.demo.model.Login;

/**
 *
 * @author vivek krishna varma
 */

public interface LoginService {
	
    boolean validateLogin(String user,String pass);
    
    Login getAppSessionId();
}