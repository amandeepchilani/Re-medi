import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginData } from '../login-data';
import { LoginAcknowledgement } from '../login-acknowledgement';
import { BooleanMessageService } from '../boolean-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginData:LoginData = new LoginData();
  loginAcknowledgement:LoginAcknowledgement = new LoginAcknowledgement();

  constructor(private httpClient:HttpClient,private messageService: BooleanMessageService) { }

  ngOnInit() {
  }
  sendMessage(ack:boolean): void {
    this.messageService.sendMessage(ack);
  }
  sendLoginData(username:String,password:String):void{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    this.loginData.setUserName(username);
    this.loginData.setPassword(password);

    this.httpClient.post('http://localhost:8090/login/',this.loginData,httpOptions).subscribe(
      (data:LoginAcknowledgement) =>{
        this.loginAcknowledgement = data;
      },
      (err) => {
        console.error('Observer got an error: ' + err);
      },
      () => {
        console.log("Data successfully recieved from server");
        if(this.loginAcknowledgement.loginSuccessful == "ok"){
            this.sendMessage(true);
        }else{
            this.sendMessage(false);
        }
      }
    );
  }
}
