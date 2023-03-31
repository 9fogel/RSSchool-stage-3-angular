import { Component, Input, OnChanges } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import response from '../../../data/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {

  @Input() searchFilterValue?: string;

  @Input() sortingData: Array<string> | undefined;

  searchItems: Array<ISearchItem> = response.items;

  sortingOption?: string;

  sortingOrder?: string;

  ngOnChanges(): void {
    if (this.sortingData) {
      [this.sortingOption, this.sortingOrder] = this.sortingData;
    }
  }
}
