package com.vproj.demo.model;

/**
 *
 * @author vivek krishna varma
 */

public class MenuItem {
    
    private long   id;
    private String menuItemName;
    private String menuSref;
    
    public MenuItem() {
        id = 0;
    }
    
    public MenuItem(long id, String menuItemName, String menuSref) {
        this.id           = id;
        this.menuItemName = menuItemName;
        this.menuSref     = menuSref;
    }
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMenuItemName() {
        return menuItemName;
    }

    public void setMenuItemName(String menuItemName) {
        this.menuItemName = menuItemName;
    }
    
    public String getMenuSref() {
        return menuSref;
    }
   
    public void setMenuSref(String menuSref) {
        this.menuSref = menuSref;
    }
}