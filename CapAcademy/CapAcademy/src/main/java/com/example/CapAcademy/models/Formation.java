	package com.example.CapAcademy.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;



@Entity(name ="Formation")
@CrossOrigin(origins ="*")
public class Formation implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id ; 
	
	private String name ; 
	private String dateDebt  ;
	private String dateFin ; 
	private String Prix ;
	private String formateur ; 
	private String type  ;
	public Formation() {
		super();
	}
	public Formation(String name, String dateDebt, String dateFin, String prix, String formateur, String type) {
		super();
		this.name = name;
		this.dateDebt = dateDebt;
		this.dateFin = dateFin;
		Prix = prix;
		this.formateur = formateur;
		this.type = type;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDateDebt() {
		return dateDebt;
	}
	public void setDateDebt(String dateDebt) {
		this.dateDebt = dateDebt;
	}
	public String getDateFin() {
		return dateFin;
	}
	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}
	public String getPrix() {
		return Prix;
	}
	public void setPrix(String prix) {
		Prix = prix;
	}
	public String getFormateur() {
		return formateur;
	}
	public void setFormateur(String formateur) {
		this.formateur = formateur;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Formation(Long id, String name, String dateDebt, String dateFin, String prix, String formateur,
			String type) {
		super();
		this.id = id;
		this.name = name;
		this.dateDebt = dateDebt;
		this.dateFin = dateFin;
		Prix = prix;
		this.formateur = formateur;
		this.type = type;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}