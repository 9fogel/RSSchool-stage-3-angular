import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/core/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createPasswordValidator } from '../../../shared/custom-validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent implements OnInit {
  hidePassword = true;

  loginForm?: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required, createPasswordValidator()],
        },
      ],
    });
  }

  submitLoginForm(): void {
    if (this.loginForm?.valid) {
      this.loginService.saveUserToLocalStorage(this.loginForm.value.login);
      this.redirectToMainPage('/youtube');
    }
  }

  private redirectToMainPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
