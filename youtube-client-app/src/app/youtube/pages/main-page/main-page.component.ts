import { Component, OnInit } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';
import FiltersService from 'src/app/core/services/filters.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent implements OnInit {
  searchFilterValue?: string;

  searchValue = '';

  sortingData = ['views', 'default'];

  constructor(public searchService: SearchService, public filtersService: FiltersService) {}

  applySearch(searchValue: string): void {
    this.searchFilterValue = searchValue;
  }

  applySorting(sortingInfo: Array<string>): void {
    this.sortingData = sortingInfo;
  }

  ngOnInit(): void {
    this.searchService.searchValue$.pipe(debounceTime(500)).subscribe((value) => {
      if (value.length >= 3) {
        this.searchValue = value;
      } else {
        this.searchValue = '';
      }
    });
  }
}
