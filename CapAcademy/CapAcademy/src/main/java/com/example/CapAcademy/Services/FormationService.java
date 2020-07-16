package com.example.CapAcademy.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.CapAcademy.Repositories.FormationRepository;


@Service
public class FormationService {

	@Autowired
	private	FormationRepository FR ;
	
	public String getFormationsById(Long id  ) {
		
		
		return FR.findFormationByid(id).getName();
		
				
				
			
				
		}
	 
	
	
}
