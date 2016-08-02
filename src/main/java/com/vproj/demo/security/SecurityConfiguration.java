package com.vproj.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import com.vproj.demo.filter.CORSFilter;

@Configuration
public class SecurityConfiguration {

		@Bean
		public RESTAuthenticationEntryPoint authenticationEntryPoint() {
			return new RESTAuthenticationEntryPoint();
		}
		
		@Bean
		public RESTAuthenticationSuccessHandler authenticationSuccessHandler() {
			return new RESTAuthenticationSuccessHandler();
		}
		
		@Bean
		public SimpleUrlAuthenticationFailureHandler authenticationFailureHandler() {
			return new SimpleUrlAuthenticationFailureHandler();
		}
		
		@Bean
		public LogoutSuccessHandler logoutSuccessHandler() {
			return new RESTLogoutSuccessHandler();
		}
		
		@Bean
		public CORSFilter corsFilter() {
			return new CORSFilter();
		}
	}