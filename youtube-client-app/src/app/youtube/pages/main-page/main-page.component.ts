import { Component } from '@angular/core';
import YoutubeService from 'src/app/core/services/youtube.service';
import FiltersService from 'src/app/core/services/filters.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  searchFilterValue?: string;

  sortingData = ['views', 'default'];

  constructor(public youtubeService: YoutubeService, public filtersService: FiltersService) {}

  applySearch(searchValue: string): void {
    this.searchFilterValue = searchValue;
  }

  applySorting(sortingInfo: Array<string>): void {
    this.sortingData = sortingInfo;
  }
}
