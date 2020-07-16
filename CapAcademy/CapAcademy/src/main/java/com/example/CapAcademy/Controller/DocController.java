package com.example.CapAcademy.Controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.CapAcademy.CapAcademyApplication;
import com.example.CapAcademy.Repositories.DocRepository;
import com.example.CapAcademy.Repositories.FormateurRepository;
import com.example.CapAcademy.models.Doc;
import com.example.CapAcademy.models.Formation;

@RestController
@CrossOrigin(origins ="*")
public class DocController {
	
	@Autowired
	private DocRepository docRepository;
	public String folderPath = "C:/Users/thame/Desktop/CapAcademy/CapAcademy/CV/" ; 
	
	@RequestMapping(value="/UploadF", method=RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

	public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile file ) throws IOException {
				
	int random =  (int) 	(Math.random() * ((100000000 - 10) + 1))  ; 

		
		
				File convertFile = new File(folderPath+random+file.getOriginalFilename());
				convertFile.createNewFile();
				FileOutputStream fout = new FileOutputStream(folderPath+random+file.getOriginalFilename());
				fout.write(file.getBytes());	
				Doc doc = new Doc(33,random+file.getOriginalFilename(),"dd");
				docRepository.save(doc);
				fout.close();
				return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);
				
		
		
	}
	
	


	
	public String CvbyId( long id ) {
		
		
		 return docRepository.findCv(id).get(0).getDocName(); 
	}

	
	

	
	@RequestMapping("/file/{id}")
	@ResponseBody
	public void show(@PathVariable("id") int id , HttpServletResponse response) {

		
	String	fileName  =  CvbyId(id); 
		
		
	      if (fileName.indexOf(".doc")>-1) response.setContentType("application/msword");
	      if (fileName.indexOf(".docx")>-1) response.setContentType("application/msword");
	      if (fileName.indexOf(".xls")>-1) response.setContentType("application/vnd.ms-excel");
	      if (fileName.indexOf(".csv")>-1) response.setContentType("application/vnd.ms-excel");
	      if (fileName.indexOf(".ppt")>-1) response.setContentType("application/ppt");
	      if (fileName.indexOf(".pdf")>-1) response.setContentType("application/pdf");
	      if (fileName.indexOf(".zip")>-1) response.setContentType("application/zip");
	      response.setHeader("Content-Disposition", "attachment; filename=" +fileName);
	      response.setHeader("Content-Transfer-Encoding", "binary");
	      try {
	    	  BufferedOutputStream bos = new BufferedOutputStream(response.getOutputStream());
	    	  FileInputStream fis = new FileInputStream(folderPath+fileName);
	    	  int len;
	    	  byte[] buf = new byte[1024];
	    	  while((len = fis.read(buf)) > 0) {
	    		  bos.write(buf,0,len);
	    	  }
	    	  bos.close();
	    	  response.flushBuffer();
	      }
	      catch(IOException e) {
	    	  e.printStackTrace();
	    	  
	      }
	}
	
	
	
	
	
	
	
	
	
	
	


	
	
	/*

	
	@RequestMapping("/files")
	public File[] showFiles(Model model) {
		String folderPath="C://Users/hp/Desktop/CapAcademy/CapAcademy/gallery";
		File folder = new File(folderPath);
		File[] listOfFiles = folder.listFiles();
		
		return listOfFiles;
	}
	*/
	

	
}
