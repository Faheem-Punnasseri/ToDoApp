import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }
  // export class AuthGuard implements CanActivate {

  canActivate() {
    let tokenExist = !!localStorage.getItem('token')
    if (!tokenExist) {
      this.router.navigateByUrl('/user/dashboard')
    }
    return true
  }
}


