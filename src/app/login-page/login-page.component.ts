import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Output() public userEvent = new EventEmitter<SocialUser>();

  private user: SocialUser;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private _userDataService: UserDataService
  ) {
    this.user = new SocialUser();
  }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
      // this.userEvent.emit(this.user);
      //using service
      this._userDataService.setUser(this.user);
      this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void {}
}
