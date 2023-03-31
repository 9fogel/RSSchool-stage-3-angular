import { Component, OnChanges, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent implements OnChanges, OnInit {
  searchValue?: string;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    console.log('init', this.searchService.searchValue);
  }

  ngOnChanges(): void {
    console.log('change', this.searchService);
    this.searchValue = this.searchService.searchValue;
  }

  filtersOpened = false;

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
