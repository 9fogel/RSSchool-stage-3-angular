import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import SharedModule from '../shared/shared.module';
import HeaderComponent from './components/header/header.component';
import PageNotFoundComponent from './pages/page-not-found/page-not-found.component';
import LoginComponent from './components/login/login.component';
import AuthInterceptor from './interceptors/auth.interceptor';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, LoginComponent],
  imports: [HttpClientModule, CommonModule, FormsModule, SharedModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  exports: [HeaderComponent, PageNotFoundComponent],
})
export default class CoreModule {}
