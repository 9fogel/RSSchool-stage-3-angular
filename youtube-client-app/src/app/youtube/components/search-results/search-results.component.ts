import { Component, Input, OnChanges } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {
  @Input() searchFilterValue?: string;

  @Input() sortingData: Array<string> | undefined;

  searchItems: Array<ISearchItem> = this.youtubeService.searchItems;

  sortingOption?: string;

  sortingOrder?: string;

  constructor(private youtubeService: YoutubeService) {}

  ngOnChanges(): void {
    if (this.sortingData) {
      [this.sortingOption, this.sortingOrder] = this.sortingData;
    }
  }
}
