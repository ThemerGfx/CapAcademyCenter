package com.example.CapAcademy.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.CapAcademy.models.User;


public interface UserRepository extends JpaRepository<User, Long>{

	

	@Query("SELECT u FROM User u WHERE u.email = ?1 and u.password = ?2 and u.etat='not valided' ")
	List<User> findUser(String email ,String pass );  
		
	
	
}
