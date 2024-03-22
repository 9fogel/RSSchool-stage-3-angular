import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/core/services/login.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { createPasswordValidator } from '../../../shared/custom-validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  hidePassword = true;

  loginForm = this.formBuilder.group({
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

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {}

  get login(): AbstractControl<string | null> | null {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl<string | null> | null {
    return this.loginForm.get('password');
  }

  submitLoginForm(): void {
    if (this.loginForm?.valid && this.loginForm.value.login) {
      this.loginService.saveUserToLocalStorage(this.loginForm.value.login);
      this.redirectToMainPage('/youtube');
    }
  }

  private redirectToMainPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
