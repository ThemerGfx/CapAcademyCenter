package com.example.CapAcademy.Controller;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.CapAcademy.CapAcademyApplication;
import com.example.CapAcademy.Repositories.DocRepository;
import com.example.CapAcademy.Repositories.FormateurRepository;
import com.example.CapAcademy.models.Doc;

@RestController
@CrossOrigin(origins ="*")
public class DocController {
	
	@Autowired
	private DocRepository docRepository;
	
	
	@RequestMapping(value="/UploadF", method=RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

	public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile file ) throws IOException {
				
		

				
				File convertFile = new File("C:\\Users\\Admin\\Downloads\\themeforest-21769397-fuse-react-react-redux-material-design-admin-template\\Fuse-React-v2.2.5\\Fuse-React-v2.2.5-skeleton\\CapAcademy\\CapAcademy\\Container\\"+file.getOriginalFilename());
				convertFile.createNewFile();
				FileOutputStream fout = new FileOutputStream(file.getOriginalFilename());
				fout.write(file.getBytes());	
				Doc doc = new Doc(FormateurController.LastIdValue,file.getOriginalFilename(),file.getContentType());
				docRepository.save(doc);
				fout.close();
				return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);
				
		
		
	}

	
}
