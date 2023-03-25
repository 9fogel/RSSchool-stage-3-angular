import { Component, Input, OnChanges } from '@angular/core';
import { ISearchItem } from 'src/app/model/search-item.model';
import response from '../../../data/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {
  searchItems: Array<ISearchItem> = response.items;

  @Input() filterData: Array<string> | undefined;

  filterName: string | undefined;

  filterOrder?: string;

  ngOnChanges(): void {
    if (this.filterData) {
      [this.filterName, this.filterOrder] = this.filterData;
    }
  }
}
