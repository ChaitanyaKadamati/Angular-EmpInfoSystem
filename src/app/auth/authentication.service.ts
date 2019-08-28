import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private currentUser: string = null;
  private userCredentials: Array<UserInfo> = [];

  constructor() { }

  public isUserAuthenticated() {
    return this.currentUser == null;
  }

  login(userinfo: UserInfo): boolean {
    let result = false;
    const authorizeduser = this.userCredentials.filter(x => x.username == userinfo.username && userinfo.password == x.password);
    if (authorizeduser.length == 1) {
      result = true;
    }
    return result;
  }

  logout() { this.currentUser = null; }

  register(userinfo: UserInfo) {
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