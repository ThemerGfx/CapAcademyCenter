package com.example.CapAcademy.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.CapAcademy.CapAcademyApplication;
import com.example.CapAcademy.Repositories.ContenuRepository;
import com.example.CapAcademy.Repositories.FormateurRepository;
import com.example.CapAcademy.Repositories.FormationRepository;
import com.example.CapAcademy.models.Formateur;
import com.example.CapAcademy.models.Formation;
import com.example.CapAcademy.models.Seance;

@RestController
@CrossOrigin(origins ="*")
public class FormationController {
	
	@Autowired
	private	FormationRepository FR ;
	

	@Autowired
	private ContenuRepository CR ; 
	

	
	 @GetMapping(value = "/Formations", produces = MediaType.APPLICATION_JSON_VALUE)
		public List<Formation> getFormations() {
			
			return FR.findAll();
		}
	 
	 
		@RequestMapping(value="/Formation" , method=RequestMethod.POST)
		public Formation Save(@RequestBody Formation c ) {
			
		
			 return FR.save(c) ; 		
	 
		}
		
		@RequestMapping(value="/Formation/{id}" , method=RequestMethod.DELETE)
		public Boolean deleteFormateur(@PathVariable Long id ) {
			 
			 FR.deleteById(id) ;
			 
			 return true ; 
		}
	 
	 
		@RequestMapping(value="/Formation/{id}" , method=RequestMethod.PUT)
		public Formation Save(@RequestBody Formation	 c , @PathVariable   long id ) {
			c.setId(id);
			
			return FR.save(c) ;
		}


		public String getFormationsById( @PathVariable Long id  ) {
				
						
			return FR.findFormationByid(id).getName();
			
					
					
				
					
			}
		 
		
		
		

		 @GetMapping(value = "/FormationByformateur", produces = MediaType.APPLICATION_JSON_VALUE)
			public List<Formation> getFormationFormateur() {
				
				return FR.findByFormateur(CapAcademyApplication.email);
			}
	
	
		 @GetMapping(value = "/Formation6", produces = MediaType.APPLICATION_JSON_VALUE)
			public List<Formation> getFormation6() {
				
				List<Formation> listResult = new ArrayList<Formation>() ;
				
				for (int i = 0; i < 3 ; i++) {
					
					listResult.add(FR.findAll().get(i)) ; 
					
				}
				
				
				return  listResult  ;
				
			}
		 
		 
		 
	
}
