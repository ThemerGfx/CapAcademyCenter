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
import org.springframework.web.bind.annotation.RestController;

import com.example.CapAcademy.Repositories.AgentRepository;
import com.example.CapAcademy.models.Agent;

@RestController
@CrossOrigin(origins ="*")
public class AgentController {

	@Autowired
	private AgentRepository ag ; 
	
	
	 @GetMapping(value = "/AffAgents", produces = MediaType.APPLICATION_JSON_VALUE)
		public List<Agent> getAgents() {
			
			return ag.findAll() ;
		}
	 
	 
		@RequestMapping(value="/Agent" , method=RequestMethod.POST)
		public Agent Save(@RequestBody Agent c ) {
			
			return ag.save(c) ;
		}
		
		@RequestMapping(value="/Agent/{id}" , method=RequestMethod.DELETE)
		public Boolean deleteContact(@PathVariable Long id ) {
			
			 ag.deleteById(id) ;
			 return true ; 
		}
	 
	 
		@RequestMapping(value="/Agent/{id}" , method=RequestMethod.PUT)
		public Agent Save(@RequestBody Agent c , @PathVariable   long id ) {
			c.setId(id); ; 	
			return ag.save(c) ;
		}
}
