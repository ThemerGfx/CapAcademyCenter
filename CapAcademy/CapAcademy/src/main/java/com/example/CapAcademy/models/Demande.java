package com.example.CapAcademy.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Demande implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id  ; 
	private String nom ; 
	private String email ; 
	private String numTel ; 
	private long idFormation ; 
	private String formation ; 
	private String Tmps ;
	private String etat ;
	
	
	public Demande() {
		super();
	}
	public Demande(String nom, String email, String numTel, long idFormation, String formation, String tmps,
			String etat) {
		super();
		this.nom = nom;
		this.email = email;
		this.numTel = numTel;
		this.idFormation = idFormation;
		this.formation = formation;
		Tmps = tmps;
		this.etat = etat;
	}
	public Demande(Long id, String nom, String email, String numTel, long idFormation, String formation, String tmps,
			String etat) {
		super();
		this.id = id;
		this.nom = nom;
		this.email = email;
		this.numTel = numTel;
		this.idFormation = idFormation;
		this.formation = formation;
		Tmps = tmps;
		this.etat = etat;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNumTel() {
		return numTel;
	}
	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}
	public long getIdFormation() {
		return idFormation;
	}
	public void setIdFormation(long idFormation) {
		this.idFormation = idFormation;
	}
	public String getFormation() {
		return formation;
	}
	public void setFormation(String formation) {
		this.formation = formation;
	}
	public String getTmps() {
		return Tmps;
	}
	public void setTmps(String tmps) {
		Tmps = tmps;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	} 
	
	

}
