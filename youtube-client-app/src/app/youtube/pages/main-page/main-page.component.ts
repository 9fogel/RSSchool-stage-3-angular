import { Component } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(public searchService: SearchService, public filtersService: FiltersService) {}

  searchFilterValue?: string;

  sortingData = ['views', 'default'];

  applySearch(event: string): void {
    this.searchFilterValue = event;
  }

  applySorting(event: Array<string>): void {
    this.sortingData = event;
  }
}
