package com.vproj.demo.service.impl;

import com.vproj.demo.model.User;
import com.vproj.demo.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author vivek krishna varma
 */

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

    private static final AtomicLong counter = new AtomicLong();

    private static List<User> users;

    static {
        users = populateDummyUsers();
    }

    @Override
    public List<User> findAllUsers() {
        return users;
    }

    @Override
    public User findById(long id) {
    	  
    	  if(users != null) {
    	  	return users.stream()
    	  			        .filter(u -> u.getId() == id)
    	  			        .findFirst()
    	  			        .orElse(null);
    	  }
        return null;
    }

    @Override
    public User findByName(String name) {
      	if(users != null) {
    	  	return users.stream()
    	  			        .filter(u -> u.getUsername().equalsIgnoreCase(name))
    	  			        .findFirst()
    	  			        .orElse(null);
    	  }
        return null;
    }

    @Override
    public void saveUser(User user) {
        user.setId(counter.incrementAndGet());
        users.add(user);
    }

    @Override
    public void updateUser(User user) {
        int index = users.indexOf(user);
        users.set(index, user);
    }

    @Override
    public void deleteUserById(long id) {
    	
    	if(users != null && (!users.isEmpty())) {
    	   users.removeIf(u -> u.getId() == id);
    	}
    	else {
    		 counter.set(0);
    	} 
    }

    @Override
    public boolean isUserExist(User user) {
        return findByName(user.getUsername()) != null;
    }

    @Override
    public void deleteAllUsers() {
        users.clear();
    }

    private static List<User> populateDummyUsers() {
        List<User> dummyUsers = new ArrayList<>(); 
        dummyUsers.add(new User(counter.incrementAndGet(),"Vivek Varma", "NY", "vkvarma@xavient.com"));
        dummyUsers.add(new User(counter.incrementAndGet(),"Vinod Yadav", "AZ", "vinody@xavient.com"));
        dummyUsers.add(new User(counter.incrementAndGet(),"Sahil bucha", "PA", "sbucha@xavient.com"));
        dummyUsers.add(new User(counter.incrementAndGet(),"Nitin Kumar", "MN", "nkumar@xavient.com"));
        dummyUsers.add(new User(counter.incrementAndGet(),"Shurabh Rastogi", "AZ", "shurabhr@xavient.com"));
        return dummyUsers;
    }
}