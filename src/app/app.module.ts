import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { NgMaterialsModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EmployeesListComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
