import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgMaterialsModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EmployeeService } from './employee.service';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  declarations: [
    AppComponent, TopBarComponent, EmployeesListComponent, AddNewEmployeeComponent,
    AuthenticationComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMaterialsModule
  ],
  providers: [ EmployeeService, AuthenticationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
