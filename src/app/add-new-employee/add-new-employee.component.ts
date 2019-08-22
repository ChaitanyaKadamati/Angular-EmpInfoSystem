import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  inupdatemode = false;

  constructor() { }

  ngOnInit() {
  }

onSubmitData(formData) {
  console.log(formData.value);
}
}