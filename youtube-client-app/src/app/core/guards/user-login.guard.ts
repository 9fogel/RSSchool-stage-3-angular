import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import LoginService from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class UserLoginGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  canLoad(): boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean | UrlTree {
    const IS_LOGGED_IN = !!this.loginService.getUserFromLocalStorage();

    return IS_LOGGED_IN || this.router.parseUrl('/auth');
  }
}
