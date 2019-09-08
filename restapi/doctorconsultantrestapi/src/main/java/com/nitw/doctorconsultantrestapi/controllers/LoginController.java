package com.nitw.doctorconsultantrestapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import com.nitw.doctorconsultantrestapi.models.LoginData;
import com.nitw.doctorconsultantrestapi.models.LoginAcknowledgement;
import com.nitw.doctorconsultantrestapi.validations.LoginValidation;

@RestController 
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {  
	@RequestMapping(value = "/login" ,  method = RequestMethod.POST)
	LoginAcknowledgement getAcknowledgement(@RequestBody Map<String, String> loginData) {
		System.out.println("new Method executed !!!");
        LoginValidation loginValidation = new LoginValidation();
        LoginAcknowledgement loginAcknowledgement = loginValidation.validate(new LoginData(loginData));
        return loginAcknowledgement;
    }
}  