import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';

import YoutubeRoutingModule from './youtube-routing.module';
import YoutubeComponent from './youtube.component';

import FilteringCriteriaComponent from './components/filtering-criteria/filtering-criteria.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import SearchItemComponent from './components/search-item/search-item.component';
import ColorfulBorderDirective from './directives/colorful-border.directive';
import SortingPipe from './pipes/sorting.pipe';
import FilterPipe from './pipes/filter.pipe';
import MainPageComponent from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    MainPageComponent,
    FilteringCriteriaComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ColorfulBorderDirective,
    SortingPipe,
    FilterPipe,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
})
// eslint-disable-next-line import/prefer-default-export
export default class YoutubeModule {}
