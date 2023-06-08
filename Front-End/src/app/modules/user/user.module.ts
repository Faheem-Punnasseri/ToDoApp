import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AsyncEmailValidator } from 'src/app/validators/email.validator';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    LandingPageComponent,
    AsyncEmailValidator
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class UserModule { }
