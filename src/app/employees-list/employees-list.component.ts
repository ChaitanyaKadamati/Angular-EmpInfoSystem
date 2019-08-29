import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService, Employee } from '../employee.service';
import { AuthenticationService } from '../auth/authentication.service';
;
class EmployeeExtended extends Employee {
  editEnabled: boolean;
  employeeNewInfo: Employee;
  constructor() {
    super();
    this.editEnabled = false;
  }
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Array<EmployeeExtended> = null;
  private isAdminRole: boolean = false;

  constructor(private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    console.log('EmpList.Init()');
    this.isAdminRole = this.authService.getUserRole() == 'admin';
    console.log('EmpList.currentUserRole()' + this.currentUserRole);
    this.authService.authChange.subscribe(x => {
      this.isAdminRole = this.authService.getUserRole() == 'admin';
    });
    this.updateEmployeesList();
  }

  updateEmployeesList() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        this.employees = new Array<EmployeeExtended>();
        for (const i of res) {
          const tempEmployee = new EmployeeExtended();
          tempEmployee.copyFrom(i);
          tempEmployee.id = i.id;
          this.employees.push(tempEmployee);
        }
      }, (err) => {
        console.log('Error : ' + err);
      }, () => {
        console.log('DB Response Count:' + this.employees.length);
      }
    );
  }

  onUpdate(pEmpId) {
    let activeEmpEdit = this.employees.filter(x => x.editEnabled);
    if (activeEmpEdit.length == 1) {
      this.onCancelUpdate(activeEmpEdit[0].id);
    }
    let emp = this.employees.filter(x => x.id == pEmpId);
    emp[0].editEnabled = true;
    emp[0].employeeNewInfo = new Employee();
    emp[0].employeeNewInfo.copyFrom(emp[0]);
    emp[0].employeeNewInfo.id = emp[0].id;
  }

  onCommitUpdate(pEmpId) {
    let emp = this.employees.filter(x => x.id == pEmpId);
    this.employeeService.updateEmployee(emp[0].employeeNewInfo);
    this.updateEmployeesList();
  }

  onCancelUpdate(pEmpId) {
    let emp = this.employees.filter(x => x.id == pEmpId);
    emp[0].employeeNewInfo = null;
    emp[0].editEnabled = false;
  }

  onDelete(pEmpId) {
    console.log(pEmpId);
    var warning = 'Are you sure you want to delete Emp - ' + pEmpId + '?';
    if (confirm(warning)) {
      this.employeeService.deleteEmployee(pEmpId);
    }
    this.updateEmployeesList();
  }

  resetEmpList() {
    this.employeeService.resetList();
    this.updateEmployeesList();
  }

  doubleClick(pEmpID) {
    if (this.isAdminRole) {
      this.onUpdate(pEmpID);
    }
  }

  onKeyUp(eventargs, empid) {
    if (eventargs.key == "Escape") {
      this.onCancelUpdate(empid);
    }
  }
}
