import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/core/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [''],
      password: [''],
    });
  }

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      this.loginService.saveUserToLocalStorage(this.loginForm.value.login); // TODO: JSON stringify??
      this.redirectToMainPage('/youtube');
    }
  }

  private redirectToMainPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
