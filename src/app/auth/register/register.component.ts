import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '.../auth/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

}