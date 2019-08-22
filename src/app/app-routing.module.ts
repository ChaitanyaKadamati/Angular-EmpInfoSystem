import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employeesList', component: EmployeesListComponent },
  { path: 'addNewEmployee/:employeeId', component: AddNewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
