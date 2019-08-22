import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Array<Employee> = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getObservableEmployees().subscribe(
      (res) => {
        this.employees = new Array<Employee>();
        for (const i of res) {
          this.employees.push(i);
        }
      }, (err) => {
        console.log('Error : ' + err);
      }, () => {
        console.log('Recei ' + this.employees.length + ' elements.');
        console.log();
      }
    );
    console.log(typeof this.employees);
    console.log(this.employees[0].firstname);
  }

}
