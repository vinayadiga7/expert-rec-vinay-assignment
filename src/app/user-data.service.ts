import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private user: SocialUser;

  constructor() {
    this.user = new SocialUser();
  }

  getUser() {
    return this.user;
  }

  setUser(user: SocialUser) {
    this.user = user;
  }

  isLoggedIn(): boolean {
    return !!this.user.authToken;
  }
}
