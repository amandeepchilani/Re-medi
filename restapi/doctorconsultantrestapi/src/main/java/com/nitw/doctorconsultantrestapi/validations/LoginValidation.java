package com.nitw.doctorconsultantrestapi.validations;


import com.nitw.doctorconsultantrestapi.models.LoginAcknowledgement;
import com.nitw.doctorconsultantrestapi.models.LoginData;
public class LoginValidation{
	public LoginAcknowledgement validate(LoginData loginData) {
		String userName = "scott";
		String password = "tiger";
		LoginAcknowledgement loginAcknowledgement = new LoginAcknowledgement();
		if(loginData.getUserName().equals(userName) && loginData.getPassword().equals(password)) {
			loginAcknowledgement.setLoginSuccessful("ok");
		}else {
			loginAcknowledgement.setLoginSuccessful("error");
		}
		return loginAcknowledgement;
	}
}