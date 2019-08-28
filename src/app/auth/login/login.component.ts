import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfoMessage = '';
  successfulLoginMessage = 'User Login Successfully.';
  failedLoginMessage = 'User Authentication Failed. Please try again.';  

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(formData) {
    let result: boolean = this.authService.login({ username: formData.value.username, password: formData.value.password });
    if (result) {
      this.userInfoMessage = this.successfulLoginMessage;
      this.router.navigate(['employeesList']);
    } else {
      this.userInfoMessage = this.failedLoginMessage;
    }
  }
}