import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Information Management';
  version = '1.0.31';
  isUserAuthorized = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isUserAuthorized = this.authService.isUserAuthenticated();
  }
}
