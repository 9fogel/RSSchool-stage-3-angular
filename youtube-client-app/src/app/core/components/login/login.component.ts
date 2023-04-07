import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  loggedIn$?: Observable<boolean>;

  constructor(public loginService: LoginService, private router: Router) {}

  openAdminPage(): void {
    this.router.navigateByUrl('/admin');
  }

  openLoginPage(): void {
    this.router.navigateByUrl('/auth');
  }

  logout(): void {
    this.openLoginPage();
    this.loginService.deleteUserFromLocalStorage();
  }

  ngOnInit(): void {
    this.loggedIn$ = this.loginService.getLoginStatus();
  }
}
