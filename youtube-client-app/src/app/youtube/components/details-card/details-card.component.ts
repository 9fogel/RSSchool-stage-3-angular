import { Component } from '@angular/core';
import { ISearchItem } from '../../model/search-item.model';
import response from '../../../data/response.json'

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export default class DetailsCardComponent {
  // searchItem: ISearchItem = {} as ISearchItem;
  searchItem: ISearchItem = response.items[8];
}
