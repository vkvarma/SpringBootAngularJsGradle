package com.vproj.demo.security;

import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import com.vproj.demo.filter.CORSFilter;

import javax.annotation.Resource;

import org.springframework.boot.autoconfigure.security.SecurityProperties;

/**
*
* @author vivek krishna varma
*/

@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class WebApplicationSecurity extends WebSecurityConfigurerAdapter {

	@Resource
	private AuthenticationEntryPoint authenticationEntryPoint;
	@Resource
	private AuthenticationFailureHandler authenticationFailureHandler;
	@Resource
	private AuthenticationSuccessHandler authenticationSuccessHandler;
	@Resource
	private CORSFilter corsFilter;
	@Resource
	private LogoutSuccessHandler logoutSuccessHandler;
	
	/*@Override
	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder.inMemoryAuthentication()
		       .withUser("user")
		       .password("user")
		       .roles("USER")
		       .and()
		       .withUser("admin")
		       .password("admin")
		       .roles("ADMIN");
	}*/

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http		   
		   .authorizeRequests()
		   .antMatchers("/","/signin","/home","/menuitems.html","/index.html","/login.html","/user.html",
	    		        "/login/**","/login/","/login","login/",
	    		        "/user/**","/user/","/user","user/",
	    		        "/menuitems/**","/menuitems/","/menuitems","menuitems/",
	    		        "/app/**","/views/**")
			   .permitAll()
	           .anyRequest()
	           .authenticated()
           .and()
           .formLogin()
            	.loginProcessingUrl("/login")
            	.usernameParameter("username")
            	.passwordParameter("password")
			    .successHandler(authenticationSuccessHandler)
			    .failureHandler(authenticationFailureHandler)
		    .and()
				.logout()
			    .logoutUrl("/logout")
			    .logoutSuccessHandler(logoutSuccessHandler)
			    .permitAll()		   
		    .and()		 
            .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
            .and()       
            .addFilterBefore(corsFilter, ChannelProcessingFilter.class)            
            .csrf()
                .csrfTokenRepository(csrfTokenRepository())
            .and()
                .addFilterAfter(new CsrfTokenResponseCookieBindingFilter(), CsrfFilter.class);
	}
	
	private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-CSRF-TOKEN");
        return repository;
    }
}