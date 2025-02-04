import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { PlanTableComponent } from './plan-table/plan-table.component';
import { PaymentComponent } from './payment/payment.component';
import { ClaimComponent } from './claim/claim.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
        LoginComponent,
        VehicleRegistrationComponent,
        CustomerRegistrationComponent,
        PlanTableComponent,
        PaymentComponent,
        ClaimComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
