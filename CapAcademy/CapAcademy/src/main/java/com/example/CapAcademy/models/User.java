package com.example.CapAcademy.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity(name = "User")
@CrossOrigin(origins ="*")

public class User {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private Long id  ; 
	
	
	private String Nom ; 
	private String Prenom ;
	private String email ;
	private String password ;
	private String date1 ;
    private String Num_telephone ; 
    private String etat ;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return Nom;
	}
	public void setNom(String nom) {
		Nom = nom;
	}
	public String getPrenom() {
		return Prenom;
	}
	public void setPrenom(String prenom) {
		Prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDate1() {
		return date1;
	}
	public void setDate1(String date1) {
		this.date1 = date1;
	}
	public String getNum_telephone() {
		return Num_telephone;
	}
	public void setNum_telephone(String num_telephone) {
		Num_telephone = num_telephone;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public User() {
		super();
	}
	
	
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public User(String nom, String prenom, String email, String password, String date1, String num_telephone,
			String etat) {
		super();
		Nom = nom;
		Prenom = prenom;
		this.email = email;
		this.password = password;
		this.date1 = date1;
		Num_telephone = num_telephone;
		this.etat = etat;
	}
	public User(Long id, String nom, String prenom, String email, String password, String date1, String num_telephone,
			String etat) {
		super();
		this.id = id;
		Nom = nom;
		Prenom = prenom;
		this.email = email;
		this.password = password;
		this.date1 = date1;
		Num_telephone = num_telephone;
		this.etat = etat;
	}
    
}
