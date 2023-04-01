import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  constructor(private router: Router) {}

  private loginValue: string | undefined;

  private prefix = '9fogel-auth';

  getUserFromLocalStorage(): string | null {
    return localStorage.getItem(`${this.prefix}-token`);
  }

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

  private deleteUserFromLocalStorage(): void {
    localStorage.removeItem(`${this.prefix}-token`);
    this.loginValue = '';
  }

  private redirectToMainPage(): void {
    this.router.navigateByUrl('/youtube');
  }

  private saveUserToLocalStorage(): void {
    if (this.loginValue) {
      localStorage.setItem(`${this.prefix}-token`, this.loginValue);
    }
  }
}
