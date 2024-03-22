import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  loginValue = '';

  passwordValue = '';

  submitLoginForm(loginValue: string, passwordValue: string): void {
    if (loginValue && passwordValue) {
      this.loginService.saveUserToLocalStorage(loginValue);
      this.redirectToMainPage('/youtube');
    }
  }

  private redirectToMainPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
