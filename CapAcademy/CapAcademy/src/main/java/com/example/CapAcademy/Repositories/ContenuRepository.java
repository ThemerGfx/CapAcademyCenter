package com.example.CapAcademy.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.CapAcademy.models.contenu;

public interface ContenuRepository extends JpaRepository<contenu,Long>{

	

	 @Query("delete from Contenu e where idFormation = ?1")
	    void deleteFormationwithcontenu(Long idFormation);
}
