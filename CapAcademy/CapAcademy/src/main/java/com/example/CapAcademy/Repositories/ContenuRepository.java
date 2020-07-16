package com.example.CapAcademy.Repositories;


import java.util.List;


import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.CapAcademy.models.contenu;

public interface ContenuRepository extends JpaRepository<contenu,Long>{

	
	@Modifying
	@Query("SELECT u FROM Contenu u where u.idFormation=?1")
	List<contenu> deletecontenusbyIdFormation(@Param("id") Long id);
		
	@Query("SELECT u FROM Contenu u ")
	List<contenu> affichage () ; 
	
}
