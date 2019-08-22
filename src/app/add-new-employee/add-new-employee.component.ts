import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  employee: Employee = null;
  inupdatemode = false;
  employeeId = null;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        const selectedEmployeeID = parseInt(params.get('employeeId'));
        console.log(selectedEmployeeID);
        if (selectedEmployeeID == -1) {
          this.inupdatemode = false;
          this.employee = new Employee();
          this.employee.hiredate = new Date();
        } else {
          this.inupdatemode = true;
          this.employeeId = selectedEmployeeID;
          this.readEmployeeDeatils(selectedEmployeeID);
        }
      }
    );
  }

  readEmployeeDeatils(paramEmpId) {
    this.employeeService.getEmployee(paramEmpId).subscribe(
      (res) => {
        if (res != null) {
          this.employee = res;
        }
      }, (err) => {
        console.log('Error : ' + err);
      }, () => {
        console.log('Received ' + this.employee.id);
      }
    );
  }

  onSubmitData(formData) {
    if (this.inupdatemode) {
      this.employeeService.updateEmployee(this.employee);
    } else {
      this.employeeService.insertEmployee(this.employee);
    }

    console.log(formData.value);
    console.log(this.employee.mgrid);
  }
}