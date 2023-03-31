import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(public router: Router) {}

  // eslint-disable-next-line class-methods-use-this
  onClick() {
    this.router.navigateByUrl('/auth');
  }
}
