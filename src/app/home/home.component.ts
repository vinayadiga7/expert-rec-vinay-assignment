import { Component, Input, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user: SocialUser;

  constructor(
    private _userDataService: UserDataService,
    private authService: SocialAuthService,
    private router: Router
  ) {
    this.user = this._userDataService.getUser();
  }

  ngOnInit(): void {
    // console.log(this.user);
  }

  signOut(): void {
    this.authService.signOut();
    // console.log(this.user);
    this.router.navigate(['/login']);
  }
}
