import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  public authChange = new Subject<boolean>();
  private currentUser: string = null;
  private userCredentials: Array<UserInfo> = [];
  private userRole: string = '';
  private adminCredentials = { username: 'admin', password: 'admin' };

  constructor() { }

  public isUserAuthenticated() {
    return this.currentUser != null;
  }

  public getUserRole() {
    return this.userRole;
  }

  login(userinfo: UserInfo): boolean {
    let result = false;
    const authorizeduser = this.userCredentials.filter(x => x.username == userinfo.username && userinfo.password == x.password);
    if (authorizeduser.length == 1) {
      result = true;
      this.currentUser = authorizeduser[0].username;
      this.userRole = 'employee';
    } else if (userinfo.username == this.adminCredentials.username && userinfo.password == this.adminCredentials.password) {
      result = true;
      this.currentUser = this.adminCredentials.username;
      this.userRole = 'admin';
    }
    this.authChange.next(result);
    return result;
  }

  logout() {
    this.currentUser = null;
    this.authChange.next(false);
  }

  register(userinfo: UserInfo) {
    console.log("Args : " + userinfo);
    let result = true;
    const authorizeduser = this.userCredentials.filter(x => x.username == userinfo.username && userinfo.password == x.password);
    if (authorizeduser.length == 1) {
      result = false;
    } else {
      this.userCredentials.push(userinfo);
    }
    return result;
  }
}

export class UserInfo {
  username: string;
  password: string;
}