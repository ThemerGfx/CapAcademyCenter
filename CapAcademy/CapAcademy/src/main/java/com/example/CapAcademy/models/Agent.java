package com.example.CapAcademy.models;

import java.io.Serializable;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.web.bind.annotation.CrossOrigin;
@Entity(name = "Agent")
@CrossOrigin(origins ="*")


public class Agent implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public Long id ;
	public String nom ;
	public String prenom ;
	public String email ;
	public String cin ;
	public String numTel ; 
	public String role ;
	public String speciality ;
	public int idAdmin ;  
	public String dateDajout ;

	
	
	public Agent() {
		super();
	}
	
	

	public Agent(long id, String nom, String prenom, String email, String cin, String numTel, String role,
			String speciality, int idAdmin, String dateDajout) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.cin = cin;
		this.numTel = numTel;
		this.role = role;
		this.speciality = speciality;
		this.idAdmin = idAdmin;
		this.dateDajout = dateDajout;
	}



	public Agent(String nom, String prenom, String email, String cin, String numTel, String role, String speciality,
			int idAdmin, String dateDajout) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.cin = cin;
		this.numTel = numTel;
		this.role = role;
		this.speciality = speciality;
		this.idAdmin = idAdmin;
		this.dateDajout = dateDajout;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getcin() {
		return cin;
	}

	public void setcin(String cin) {
		this.cin = cin;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public int getIdAdmin() {
		return idAdmin;
	}

	public void setIdAdmin(int idAdmin) {
		this.idAdmin = idAdmin;
	}

	public String getDateDajout() {
		return dateDajout;
	}

	public void setDateDajout(String dateDajout) {
		this.dateDajout = dateDajout;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	@Override
	public String toString() {
		return "Agent [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", cin=" + cin
				+ ", numTel=" + numTel + ", role=" + role + ", speciality=" + speciality + ", idAdmin=" + idAdmin
				+ ", dateDajout=" + dateDajout + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
