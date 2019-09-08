package com.nitw.doctorconsultantrestapi.models;

import java.util.Map;

public class LoginData{
	String userName;
	String password;
	
	public LoginData() {}
	public LoginData(Map<String, String> loginData){
		this.userName = loginData.get("userName");
		this.password = loginData.get("password");
	}
	public String getUserName(){
        return this.userName;
    }
	public String getPassword(){
        return this.password;
    }
	public void setUserName(String userName){
        this.userName = userName;
    }
	public void setPassword(String password){
        this.password = password;
    } 
}