import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NbCardModule,
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
