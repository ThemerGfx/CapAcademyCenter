package com.example.CapAcademy;

import javax.servlet.MultipartConfigElement;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.util.unit.DataSize;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins ="*")
@SpringBootApplication

@ServletComponentScan
public class CapAcademyApplication {

	public static int idUser = 2 ; 
	
	public static void main(String[] args) {
		
		
		
		SpringApplication.run(CapAcademyApplication.class, args);
		
	
	}

	
	 @Bean
	    MultipartConfigElement multipartConfigElement() {
	        MultipartConfigFactory factory = new MultipartConfigFactory();
	        factory.setMaxFileSize(DataSize.ofMegabytes(10));
	        factory.setMaxRequestSize(DataSize.ofMegabytes(10));
	        return factory.createMultipartConfig();
	    }
}
