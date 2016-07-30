package com.vproj.demo.service;

import java.util.List;

import com.vproj.demo.model.MenuItem;

/**
 *
 * @author vivek krishna varma
 */

public interface MenuItemService {
    
   List<MenuItem> fetchAllMenuItems(); 
   
}