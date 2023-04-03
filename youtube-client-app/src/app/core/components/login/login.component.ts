import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  openLoginPage(): void {
    this.router.navigateByUrl('/auth');
  }

  logout(): void {
    this.openLoginPage();
    this.loginService.deleteUserFromLocalStorage();
  }
}
