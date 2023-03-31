import { Component, OnChanges, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent implements OnChanges, OnInit {
  searchValue?: string;

  filtersOpened = false;

  constructor(private searchService: SearchService, private filtersService: FiltersService) {}

  ngOnInit(): void {
    console.log('init', this.searchService.searchValue);
    this.filtersOpened = this.filtersService.filtersShown;
    console.log('this.filtersOpened', this.filtersOpened);
  }

  ngOnChanges(): void {
    console.log('change', this.searchService);
    this.searchValue = this.searchService.searchValue;
  }

  searchFilterValue?: string;

  sortingData = ['views', 'default'];

  // addItem(newItem: string): void {
  //   this.searchValue = newItem;
  // }

  applySearch(event: string): void {
    this.searchFilterValue = event;
  }

  applySorting(event: Array<string>): void {
    this.sortingData = event;
  }

  // switchFiltersView(event: boolean): void {
  //   this.filtersOpened = event;
  // }
}
