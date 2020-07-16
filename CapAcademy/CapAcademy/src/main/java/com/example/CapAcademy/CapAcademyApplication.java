package com.example.CapAcademy;

import javax.servlet.MultipartConfigElement;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.util.unit.DataSize;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.CapAcademy.Controller.ContenuController;
import com.example.CapAcademy.Controller.FormationController;
import com.example.CapAcademy.Services.FormationService;


@CrossOrigin(origins ="*")
@SpringBootApplication

@ServletComponentScan
public class CapAcademyApplication {

	public static int idUser ; 
	public static String email ;
	public static String NumTel ;
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
