import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  inupdatemode = false;
  employeeId = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        const selectedEmployeeID =parseInt(params.get('employeeId'));
        console.log(selectedEmployeeID);
        if(selectedEmployeeID == -1) {
          this.inupdatemode = false;
        } else {
          this.inupdatemode = true;
          this.employeeId = selectedEmployeeID;
        }
      }
    );
  }

  onSubmitData(formData) {
    console.log(formData.value);
  }
}