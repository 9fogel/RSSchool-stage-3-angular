import { Component } from '@angular/core';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private loginService: LoginService) {}

  openLoginPage(): void {
    this.loginService.openLoginPage();
  }

  logout(): void {
    this.loginService.logout();
  }
}
