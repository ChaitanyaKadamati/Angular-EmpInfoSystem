import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userInfoMessage = '';
  successfulRegisterMessage = 'User created Successfully. Please use the Login tab to Logon';
  failedRegisterMessage = 'User creation Failed. Please use a different username.';
  
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  register(formData) {
    let result: boolean = this.authService.register({ username: formData.value.username, password: formData.value.password });
    if (result) {
      this.userInfoMessage = this.successfulRegisterMessage;
    } else {
      this.userInfoMessage = this.failedRegisterMessage;
    }
  }
}