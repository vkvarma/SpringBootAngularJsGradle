package com.vproj.demo.service.impl;

import com.vproj.demo.model.MenuItem;
import com.vproj.demo.service.WelcomeService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author vivek krishna varma
 */

@Service("welcomeService")
@Transactional
public class WelcomeServiceImpl implements WelcomeService {
    
    private static List<MenuItem> menuItems;

    static {
            menuItems = populateDummyItems();
    }

    @Override
    public List<MenuItem> fetchAllMenuItems() {
       return menuItems;
    }
    
    private static List<MenuItem> populateDummyItems() {
        List<MenuItem> dummyMenuItems = new ArrayList<>();
        dummyMenuItems.add(new MenuItem(1,"User","user"));
        dummyMenuItems.add(new MenuItem(2,"Login","login"));
        return dummyMenuItems;
    }    
}