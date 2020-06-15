package com.example.CapAcademy.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.CapAcademy.models.Formateur;

@CrossOrigin(origins ="*")

public interface FormateurRepository extends JpaRepository<Formateur, Long> {

	
	@Query("SELECT u FROM Formateur u ORDER BY u.id DESC ")
	List<Formateur> findUserOrderDesc();  
		
	
	
	
}
