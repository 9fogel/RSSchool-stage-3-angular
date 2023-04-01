import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  constructor(private router: Router) {}

  loginValue: string | undefined;

  logout(): void {
    this.deleteUserFromLocalStorage();
    this.openLoginPage();
  }

  openLoginPage(): void {
    this.router.navigateByUrl('/auth');
  }

  submitLoginForm(value: string): void {
    this.loginValue = value;
    this.saveUserToLocalStorage();
    this.redirectToMainPage();
  }

  private deleteUserFromLocalStorage(prefix = '9fogel-auth'): void {
    localStorage.removeItem(`${prefix}-token`);
    this.loginValue = '';
  }

  private redirectToMainPage(): void {
    this.router.navigateByUrl('/youtube');
  }

  private saveUserToLocalStorage(prefix = '9fogel-auth'): void {
    if (this.loginValue) {
      localStorage.setItem(`${prefix}-token`, this.loginValue);
    }
  }
}
