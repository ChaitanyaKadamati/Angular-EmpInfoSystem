import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,
    private router: Router) { }

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
    let result: boolean = false;
    if (this.inupdatemode) {
      result = this.employeeService.updateEmployee(this.employee);
      if (result) {
        alert('SuccessMsg : Employee details updated.');
      } else {
        alert('FailMsg : Update failed.');
      }
    } else {
      result = this.employeeService.insertEmployee(this.employee);
      if (result) {
        alert('SuccessMsg : New Employee Created.');
      } else {
        alert('FailMsg : Employee Already Exists.');
      }
      if (result) {
        this.router.navigate(['/employeesList']);
      }
    }

    console.log(formData.value);
    console.log(this.employee.mgrid);
  }
}