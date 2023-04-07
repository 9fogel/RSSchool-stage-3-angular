import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  loginValue: string | undefined;

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  private prefix = '9fogel-auth';

  deleteUserFromLocalStorage(): void {
    localStorage.removeItem(`${this.prefix}-token`);
    this.loginValue = '';
    this.setLoginStatus(false);
  }

  getLoginStatus(): Observable<boolean> | undefined {
    return this.isLoggedIn$;
  }

  getUserFromLocalStorage(): string | null {
    if (localStorage.getItem(`${this.prefix}-token`)) {
      this.loginValue = localStorage.getItem(`${this.prefix}-token`) ?? '';
      this.setLoginStatus(true);
    } else {
      this.setLoginStatus(false);
    }
    return localStorage.getItem(`${this.prefix}-token`);
  }

  saveUserToLocalStorage(value: string): void {
    this.loginValue = value;
    if (this.loginValue) {
      localStorage.setItem(`${this.prefix}-token`, this.loginValue);
      this.setLoginStatus(true);
    }
  }

  private setLoginStatus(status: boolean): void {
    this.isLoggedIn$.next(status);
  }
}
