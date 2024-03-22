import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import SharedModule from '../shared/shared.module';

import AdminRoutingModule from './admin-routing.module';
import AdminPageComponent from './pages/admin-page/admin-page.component';
import CreateCardFormComponent from './components/create-card-form/create-card-form.component';
import CustomCardsListComponent from './components/custom-cards-list/custom-cards-list.component';
import CustomCardComponent from './components/custom-card/custom-card.component';

const routes: Routes = [
  { path: '', component: CreateCardFormComponent },
  { path: 'cards', component: CustomCardsListComponent },
];

@NgModule({
  declarations: [
    AdminPageComponent,
    CreateCardFormComponent,
    CustomCardsListComponent,
    CustomCardComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule, RouterModule.forChild(routes)],
})
export default class AdminModule {}
