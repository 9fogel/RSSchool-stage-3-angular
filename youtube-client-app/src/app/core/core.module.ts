import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.module';
import HeaderComponent from './components/header/header.component';
import PageNotFoundComponent from './pages/page-not-found/page-not-found.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, LoginComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule],
  exports: [HeaderComponent, PageNotFoundComponent],
})
export default class CoreModule {}
