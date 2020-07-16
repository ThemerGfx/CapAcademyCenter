package com.example.CapAcademy.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity(name = "Contenu")
@CrossOrigin(origins = "*")
public class contenu implements Serializable {

	@Override
	public String toString() {
		return "contenu [id=" + id + ", name=" + name + ", formation=" + formation + ", idFormation=" + idFormation
				+ "]";
	}

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)

	private Long id;
	private String name;
	private String formation;
	private Long idFormation ; 
	

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

	public String getFormation() {
		return formation;
	}

	public void setFormation(String formation) {
		this.formation = formation;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Long getIdFormation() {
		return idFormation;
	}

	public void setIdFormation(Long idFormation) {
		this.idFormation = idFormation;
	}

	public contenu(String name, String formation, Long idFormation) {
		super();
		this.name = name;
		this.formation = formation;
		this.idFormation = idFormation;
	}

	public contenu() {
		super();
	}


	
	

}
