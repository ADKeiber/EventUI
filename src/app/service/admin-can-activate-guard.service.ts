import { Injectable } from '@angular/core';
import { Router, CanActivateChild,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminCanActivateGuardService implements CanActivateChild {

  constructor(private router:Router, private authService: AuthguardService ) { }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    console.log("USING CHILD!!!");
    if (!this.authService.isAdminUser()) {
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
  }
}