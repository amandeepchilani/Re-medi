import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {

  constructor() { }
  ngOnInit(){
   
  }
  sendRegistrationData(
    firstname:String,
    lastname:String,
    age:String,
    gender:String,
    bloodgroup:String,
    symptoms:String,
    diabatics:String,
    bp:String,
    smoke:String,
    specialization:String){
          console.log(gender);  
  }
}
