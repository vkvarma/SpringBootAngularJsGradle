package com.vproj.demo.model;

/**
 *
 * @author vivek krishna varma
 */

public class Login {
    
    private String sessionId;
    private String username;
    private String password;
    private boolean authenticated;

	public Login() {
        
    }
    
    public Login(String sessionId, String username, String password) {
        this.sessionId = sessionId;
        this.username  = username;
        this.password  = password;
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

	public boolean isAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}
}