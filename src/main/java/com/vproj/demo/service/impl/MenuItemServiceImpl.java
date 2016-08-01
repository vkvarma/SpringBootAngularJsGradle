package com.vproj.demo.service.impl;

import com.vproj.demo.model.MenuItem;
import com.vproj.demo.service.MenuItemService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author vivek krishna varma
 */

@Service("menuItemService")
@Transactional
public class MenuItemServiceImpl implements MenuItemService {
    
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
        return dummyMenuItems;
    }    
}