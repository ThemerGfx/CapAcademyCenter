package com.example.CapAcademy.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.springframework.web.bind.annotation.CrossOrigin;
@Entity(name = "Doc")
@CrossOrigin(origins ="*")
public class Doc implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	
	
	
	@Id
	public int id ;
	
	
	public String docName ; 
	public String docType ;
	


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}




	public Doc(String docName, String docType) {
		super();
		this.docName = docName;
		this.docType = docType;
	
	}

	public Doc(int id, String docName, String docType) {
		super();
		this.id = id;
		this.docName = docName;
		this.docType = docType;

	}

	public Doc() {
		super();
	}
	
	
	
	
	
}
