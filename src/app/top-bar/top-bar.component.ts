import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/authentication.service';
;
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  logout() {
    console.log('Logout');
    this.authService.logout();
    this.router.navigate(['']);
  }
}