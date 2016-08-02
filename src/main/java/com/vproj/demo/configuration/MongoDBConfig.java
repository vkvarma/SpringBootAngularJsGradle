package com.vproj.demo.configuration;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

@Configuration
public class MongoDBConfig {

	@Value("${spring.data.mongodb.uri}")
	private String mongouri;

	@Bean
	public MongoClient mongo() throws Exception {
		return new MongoClient(new MongoClientURI(mongouri));
	}
	
	@Bean
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public SimpleMongoDbFactory getDemoDatabase(@Qualifier("mongo") MongoClient mongoClient) {
		SimpleMongoDbFactory factory = null;
		try {
			factory = new SimpleMongoDbFactory(mongoClient, "demoDatabase");
		}
		catch (Exception e) {
		}
		return factory;
	}
}