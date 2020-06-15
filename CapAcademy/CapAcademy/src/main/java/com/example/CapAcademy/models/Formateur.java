package com.example.CapAcademy.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity(name = "Formateur")
@CrossOrigin(origins ="*")
public class Formateur {

	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id  ; 
	private String nom ;
	private String prenom ;
	private String phone ;
	private String specialite  ;
	
	
	public Formateur() {
		super();
	}
	public Formateur(String nom, String prenom, String phone, String specialite) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.phone = phone;
		this.specialite = specialite;
	} 

	
	public Formateur(Long id, String nom, String prenom, String phone, String specialite) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.phone = phone;
		this.specialite = specialite;
	}
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSpecialite() {
		return specialite;
	}
	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
}
