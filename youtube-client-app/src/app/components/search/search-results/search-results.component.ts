import { Component } from '@angular/core';
import { ISearchItem } from 'src/app/model/search-item.model';
import response from '../../../data/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  searchItems: Array<ISearchItem> = response.items;
}
