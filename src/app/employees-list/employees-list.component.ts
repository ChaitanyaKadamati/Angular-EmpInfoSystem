import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, Employee } from '../employee.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Array<Employee> = null;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.readEmployeesList();

  }

  readEmployeesList() {
    this.employeeService.getObservableEmployees().subscribe(
      (res) => {
        this.employees = new Array<Employee>();
        for (const i of res) {
          this.employees.push(i);
        }
      }, (err) => {
        console.log('Error : ' + err);
      }, () => {
        console.log('Received ' + this.employees.length + ' elements.');
      }
    );
  }

  onUpdate(pEmpId) {
    console.log(pEmpId);
    this.router.navigate();
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
}
