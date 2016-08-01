package com.vproj.demo.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.vproj.demo.security.WebApplicationSecurity;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

/**
*
* @author vivek krishna varma
*/
@Configuration
@EnableAutoConfiguration
@ComponentScan({"com.vproj.demo"})
@SpringBootApplication
public class Application {

	@Bean
	public WebSecurityConfigurerAdapter webSecurityConfigurerAdapter() {
		return new WebApplicationSecurity();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	} 
}