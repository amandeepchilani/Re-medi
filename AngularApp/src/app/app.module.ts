import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterbarComponent } from './registerbar/registerbar.component';
import { LoginComponent } from './login/login.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { ConsultantRegistrationComponent } from './consultant-registration/consultant-registration.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RegisterbarComponent,
    LoginComponent,
    DoctorRegistrationComponent,
    ConsultantRegistrationComponent,
    PatientReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
