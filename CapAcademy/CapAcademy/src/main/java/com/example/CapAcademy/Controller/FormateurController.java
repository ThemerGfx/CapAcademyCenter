package com.example.CapAcademy.Controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.CapAcademy.CapAcademyApplication;
import com.example.CapAcademy.Repositories.AgentRepository;
import com.example.CapAcademy.Repositories.FormateurRepository;
import com.example.CapAcademy.models.Agent;
import com.example.CapAcademy.models.Formateur;

@RestController
@CrossOrigin(origins ="*")
public class FormateurController {

public static int LastIdValue = 0 ;
	
	@Autowired
	private FormateurRepository FR  ; 
	

	
	
	
	@GetMapping(value = "/LoginFormateur/{email}/{phone}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Formateur LoginUser( @PathVariable String email ,@PathVariable  String phone) {
		Formateur formateur = new Formateur() ; 
	 int size = FR.findFormateur(email, phone).size() ; 
	 if (size == 0)
	 {
		 
		 
		 
		 return formateur;}
	 else 
	 {
		 
		 CapAcademyApplication.email =  FR.findFormateur(email, phone).get(0).getNom() ; 
		 CapAcademyApplication.idUser =  FR.findFormateur(email, phone).get(0).getId().intValue() ; 
		 CapAcademyApplication.NumTel =  FR.findFormateur(email, phone).get(0).getPhone() ; 
		 	 
		 
		 System.out.println(CapAcademyApplication.email );
		 System.out.println(CapAcademyApplication.idUser);
		 System.out.println(CapAcademyApplication.NumTel);
		 
		 return  FR.findFormateur(email, phone).get(0);
		 
	 
	 
	 
	 
	 
	 }
	 
 
 
 }


	
	
	
	
	
	
	
	
	
	
	 @GetMapping(value = "/Formateurs", produces = MediaType.APPLICATION_JSON_VALUE)
		public List<Formateur> getFormateurs() {
			
			return FR.findUserOrderDesc();
		}
	 
	 
		@RequestMapping(value="/Formateur" , method=RequestMethod.POST)
		public int Save(@RequestBody Formateur c ) {
			
			 FR.save(c) ;
			
		LastIdValue	=	 FR.findUserOrderDesc().get(0).getId().intValue();
		return LastIdValue ; 
		}
		
		@RequestMapping(value="/Formateur/{id}" , method=RequestMethod.DELETE)
		public Boolean deleteFormateur(@PathVariable Long id ) {
			
			 FR.deleteById(id) ;
			 return true ; 
		}
	 
	 
		@RequestMapping(value="/Formateur/{id}" , method=RequestMethod.PUT)
		public Formateur Save(@RequestBody Formateur c , @PathVariable   long id ) {
			c.setId(id); 
			return FR.save(c) ;
		}
	
}
