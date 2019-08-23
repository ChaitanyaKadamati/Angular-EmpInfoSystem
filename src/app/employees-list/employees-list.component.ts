import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService, Employee } from '../employee.service';

class EmployeeExtended extends Employee {
  editEnabled: boolean;

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

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.readEmployeesList();

  }

  readEmployeesList() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        this.employees = new Array<EmployeeExtended>();
        for (const i of res) {
          const tempEmployee = new EmployeeExtended();
          tempEmployee.copyFrom(i);
          this.employees.push(tempEmployee);
        }
      }, (err) => {
        console.log('Error : ' + err);
      }, () => {
        console.log('Received ' + this.employees.length + ' elements.');
      }
    );
  }

  onUpdate(pEmpId) {
    console.log('Log Pointer : ' +pEmpId);
    let emp = this.employees.filter(x => x.id == pEmpId);
    emp[0].editEnabled = true;
  }

  onDelete(pEmpId) {
    console.log(pEmpId);
    var warning = 'Are you sure you want to delete Emp - ' + pEmpId + '?';
    if (confirm(warning)) {
      this.employeeService.deleteEmployee(pEmpId);
    }
    this.readEmployeesList();
  }

  resetEmpList() {
    this.employeeService.resetList();
    this.readEmployeesList();
  }

  doubleClick(pEmpID) {
    console.log("Dblclicked - " + pEmpID);
  }
}
