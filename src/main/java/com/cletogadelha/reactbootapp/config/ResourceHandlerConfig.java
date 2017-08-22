package com.cletogadelha.reactbootapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class ResourceHandlerConfig extends WebMvcConfigurerAdapter {
 
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("/static/").setCachePeriod(0);
        registry.addResourceHandler("/libs/**").addResourceLocations("classpath:/libs/").setCachePeriod(0);
        registry.addResourceHandler("/media/**").addResourceLocations("classpath:/media/").setCachePeriod(0);
    }
 
}