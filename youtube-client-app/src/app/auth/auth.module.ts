import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';

import AuthRoutingModule from './auth-routing.module';
import AuthComponent from './auth.component';
import LoginPageComponent from './pages/login-page/login-page.component';
import LoginFormComponent from './components/login-form/login-form.component';

@NgModule({
  declarations: [AuthComponent, LoginPageComponent, LoginFormComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export default class AuthModule {}
