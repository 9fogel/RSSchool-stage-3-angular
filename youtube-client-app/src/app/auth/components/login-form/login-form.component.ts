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

  submitLoginForm(loginValue: string | undefined, passwordValue: string | undefined) {
    if (loginValue && passwordValue) {
      this.loginService.saveUserToLocalStorage(loginValue);
      this.redirectToMainPage();
    }
  }

  private redirectToMainPage(): void {
    this.router.navigateByUrl('/youtube');
  }
}
