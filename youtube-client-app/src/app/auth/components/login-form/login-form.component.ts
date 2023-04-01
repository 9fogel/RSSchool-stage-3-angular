import { Component } from '@angular/core';
import LoginService from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  constructor(private loginService: LoginService) {}

  loginValue?: string;

  passwordValue?: string;

  submitLoginForm(loginValue: string | undefined, passwordValue: string | undefined) {
    if (loginValue && passwordValue) {
      this.loginService.submitLoginForm(loginValue);
    }
  }
}
