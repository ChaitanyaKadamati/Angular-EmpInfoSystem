import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  public authChange = new Subject<boolean>();
  private currentUser: string = null;
  private userCredentials: Array<UserInfo> = [];

  constructor() { }

  public isUserAuthenticated() {
    return this.currentUser != null;
  }

  login(userinfo: UserInfo): boolean {
    let result = false;
    const authorizeduser = this.userCredentials.filter(x => x.username == userinfo.username && userinfo.password == x.password);
    if (authorizeduser.length == 1) {
      result = true;
      this.authChange.next(true);
      this.currentUser = authorizeduser[0].username;
    }
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