import { Component } from '@angular/core';
import { BooleanMessageService } from './boolean-message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showConsultantForm:boolean;
  showDoctorForm:boolean;
  showPatientForm:boolean;
  subscription: Subscription;
  constructor(private messageService: BooleanMessageService) {
    this.subscription = this.messageService.getMessage().subscribe(
      (showConsultantForm) => { 
        this.showConsultantForm = showConsultantForm;
        this.showDoctorForm = !showConsultantForm;
        this.showPatientForm = !showConsultantForm;
        console.log(this.showConsultantForm);
      }
    );
}
}
