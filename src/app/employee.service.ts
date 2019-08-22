import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Array<Employee> = null;
  private empidIndexCounter: number = null;
  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.employees = EmployeeFactory.getEmployees();
    this.empidIndexCounter = parseInt(this.employees[this.employees.length - 1].id) + 1;
  }

  public getObservableEmployees(): Observable<Employee[]> {
    const mocked: Employee[] = [...this.employees];
    return of(mocked);
  }

  getEmployee(pEmpID): Employee {
    let result: Employee = null;
    let empsList = this.employees.filter(x => x.id == pEmpID);
    if (empsList.length == 1)
      result = empsList[0];
    return result;
  }

  getEmployees(): Array<Employee> {
    return { ...this.employees };
  }

  insertEmployee(param: Employee): boolean {
    let result = false;

    let flagElementAvailable = false;
    for (const item of this.employees) {
      if (item.firstname == param.firstname && item.lastname == param.lastname) {
        flagElementAvailable = true; break;
      }
    }
    if (!flagElementAvailable) {
      const newItem: Employee = new Employee();
      newItem.id = this.empidIndexCounter++ + '';
      newItem.copyFrom(param);
      this.employees.push(newItem);
      result = true;
    }
    return result;
  }

  deleteEmployee(pEmpID): boolean {
    let result: boolean = false;
    let empsList = this.employees.filter(x => x.id == pEmpID);
    if (empsList.length == 1) {
      this.employees = empsList;
      result = true;
    }
    return result;
  }

  updateEmployee(pEmp: Employee) {
    let result: boolean = false;
    let empsList = this.employees.filter(x => x.id == pEmp.id);
    if (empsList.length == 1) {
      empsList[0].copyFrom(pEmp);
      result = true;
    }
    return result;
  }
}
export class Employee {
  id: string;
  firstname: string;
  lastname: string;
  mgrid: string;
  designation: string;
  hiredate: Date;
  copyFrom(other: Employee) {
    this.firstname = other.firstname;
    this.lastname = other.lastname;
    this.mgrid = other.mgrid;
    this.designation = other.designation;
    this.hiredate = other.hiredate;
  }
}
class EmployeeFactory {

  static getEmployees(): Array<Employee> {
    const result: Array<Employee> = new Array<Employee>();
    for (let i = 1; i <= 20; i++) {
      const employeeData = new Employee();
      employeeData.id = i + '';
      employeeData.firstname = 'FirstName' + i;
      employeeData.lastname = 'LastName' + i;
      employeeData.mgrid = (i + 1) + '';
      employeeData.hiredate = new Date();
      employeeData.hiredate.setDate((new Date().getDate() - i));
      result.push(employeeData);
    }
    return result;
  }
}