import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard/landingPage', pathMatch: 'full' }, //ANOTHER METHOD
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: UserComponent, children: [
      { path: '', component: LandingPageComponent },
      // { path: 'landingPage', component: LandingPageComponent }, //ANOTHER METHOD
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard/landingPage' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
