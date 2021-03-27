import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NbCardModule,
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbUserModule,
  NbStepperModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDataService } from './user-data.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    SocialLoginModule,
    NbStepperModule,
  ],
  exports: [RouterModule],
  providers: [
    UserDataService,
    AuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '302203046376-73b8cm7r3foo1sh4otjebpvgm3eossng.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
