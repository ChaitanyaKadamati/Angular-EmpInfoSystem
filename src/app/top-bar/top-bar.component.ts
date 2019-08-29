import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/authentication.service';
;
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentUserRole: string = null;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.currentUserRole = this.authService.getUserRole();
    this.authService.authChange.subscribe(x => {
      if (x == true) {
        this.currentUserRole = this.authService.getUserRole();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}