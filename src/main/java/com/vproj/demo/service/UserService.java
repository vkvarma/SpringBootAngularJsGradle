package com.vproj.demo.service;

import java.util.List;

import com.vproj.demo.model.User;

/**
 *
 * @author vivek krishna varma
 */

public interface UserService {
	
    User findById(long id);

    User findByName(String name);

    void saveUser(User user);

    void updateUser(User user);

    void deleteUserById(long id);

    List<User> findAllUsers(); 

    //List<User> findByRange(long start,long end);
    
    void deleteAllUsers();

    boolean isUserExist(User user);	
}