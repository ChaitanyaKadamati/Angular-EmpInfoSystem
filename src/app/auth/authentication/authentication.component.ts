import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
activeTab = '';
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    let isUserAuthenticated = this.authService.isUserAuthenticated();
    if (isUserAuthenticated) {
      this.router.navigate(['employeesList']);
    } else {
      // Open Login tab by default
      this.openTab(null,'Login');
    }
  }

  openTab(evt, tabName) {
    this.activeTab = tabName;
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    //evt.currentTarget.className += " active";
  }
}