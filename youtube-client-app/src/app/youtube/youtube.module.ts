import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.module';

import YoutubeRoutingModule from './youtube-routing.module';

import FilteringCriteriaComponent from './components/filtering-criteria/filtering-criteria.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import SearchItemComponent from './components/search-item/search-item.component';
import ColorfulBorderDirective from './directives/colorful-border.directive';
import SortingPipe from './pipes/sorting.pipe';
import FilterPipe from './pipes/filter.pipe';

import MainPageComponent from './pages/main-page/main-page.component';
import DetailedInfoPageComponent from './pages/detailed-info-page/detailed-info-page.component';
import DetailsCardComponent from './components/details-card/details-card.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':id', component: DetailedInfoPageComponent },
];

@NgModule({
  declarations: [
    MainPageComponent,
    FilteringCriteriaComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ColorfulBorderDirective,
    SortingPipe,
    FilterPipe,
    DetailedInfoPageComponent,
    DetailsCardComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule, RouterModule.forChild(routes)],
})
export default class YoutubeModule {}
