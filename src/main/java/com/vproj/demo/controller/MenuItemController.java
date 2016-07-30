package com.vproj.demo.controller;

import com.vproj.demo.model.MenuItem;
import com.vproj.demo.service.MenuItemService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author vivek krishna varma
 */

@RestController
public class MenuItemController {
    
    @Autowired
    MenuItemService menuItemService;  
     
    //-------------------Retrieve All Menu Items--------------------------------------------------------
     
    @RequestMapping(value = "/", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<MenuItem>> fetchAllMenuItems() {
        List<MenuItem> menuItems = menuItemService.fetchAllMenuItems();
        if(menuItems == null || menuItems.isEmpty())	{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(menuItems, HttpStatus.OK);
    }
}