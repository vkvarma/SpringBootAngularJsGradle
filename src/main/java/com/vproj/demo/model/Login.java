package com.vproj.demo.model;

/**
 *
 * @author vivek krishna varma
 */

public class Login {
    
    private long   id;
    private String sessionId;
    private String username;
    private String password;

    public Login() {
        
    }
    
    public Login(long id,String sessionId, String username, String password) {
        this.id        = id;
        this.sessionId = sessionId;
        this.username  = username;
        this.password  = password;
    }    
    
    /**
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the sessionId
     */
    public String getSessionId() {
        return sessionId;
    }

    /**
     * @param sessionId the sessionId to set
     */
    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }
}