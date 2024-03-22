import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';

import AdminRoutingModule from './admin-routing.module';
import AdminPageComponent from './pages/admin-page/admin-page.component';
import CreateCardFormComponent from './components/create-card-form/create-card-form.component';

@NgModule({
  declarations: [AdminPageComponent, CreateCardFormComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export default class AdminModule {}
