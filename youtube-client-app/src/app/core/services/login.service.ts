import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  private loginValue: string | undefined;

  private prefix = '9fogel-auth';

  deleteUserFromLocalStorage(): void {
    localStorage.removeItem(`${this.prefix}-token`);
    this.loginValue = '';
  }

  getUserFromLocalStorage(): string | null {
    return localStorage.getItem(`${this.prefix}-token`);
  }

  saveUserToLocalStorage(value: string): void {
    this.loginValue = value;
    if (this.loginValue) {
      localStorage.setItem(`${this.prefix}-token`, this.loginValue);
    }
  }
}
