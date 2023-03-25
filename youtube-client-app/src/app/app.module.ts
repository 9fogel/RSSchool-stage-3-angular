import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchResultsComponent from './components/search/search-results/search-results.component';
import SearchItemComponent from './components/search/search-item/search-item.component';
import FilteringCriteriaComponent from './components/filtering-criteria/filtering-criteria.component';
import ColorfulBorderDirective from './directives/colorful-border.directive';
import FilterPipe from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    ColorfulBorderDirective,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
