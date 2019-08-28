import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'employeesList', component: EmployeesListComponent },
  { path: 'addNewEmployee/:employeeId', component: AddNewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
