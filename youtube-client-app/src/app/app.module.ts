import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { FormsModule } from '@angular/forms';
import CoreModule from './core/core.module';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';

// import SearchResultsComponent from './components/search/search-results/search-results.component';
// import SearchItemComponent from './youtube/components/search-item/search-item.component';
// import FilteringCriteriaComponent from './youtube/components/filtering-criteria/filtering-criteria.component';
// import ColorfulBorderDirective from './youtube/directives/colorful-border.directive';
// import SortingPipe from './youtube/pipes/sorting.pipe';
// import FilterPipe from './youtube/pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule,
    // MatCardModule,
    CoreModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
