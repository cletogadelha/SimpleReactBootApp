package com.cletogadelha.reactbootapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SimpleReactBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimpleReactBootApplication.class, args);
	}
	
	@Bean
	public RestTemplate createRestTemplate() {
		return new RestTemplate();
	}
	
}
