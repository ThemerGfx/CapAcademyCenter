package com.example.CapAcademy.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.CapAcademy.models.Doc;

@CrossOrigin(origins ="*")
public interface DocRepository extends JpaRepository<Doc, Integer>{
	
	@Query("SELECT u FROM Doc u WHERE u.id = ?1")
	List<Doc> findCv(long id  );  
		
	
}
