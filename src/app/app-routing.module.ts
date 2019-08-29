import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'employeesList', component: EmployeesListComponent, canActivate:[AuthGuard] },
  { path: 'addNewEmployee', component: AddNewEmployeeComponent, canActivate:[AuthGuard] },
  { path: 'addNewEmployee/:employeeId', component: AddNewEmployeeComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
providers: [AuthGuard]
})
export class AppRoutingModule { }
