import { Component, Input } from '@angular/core';
import { TStatistics } from '../../model/search-item.model';

@Component({
  selector: 'app-card-details-list',
  templateUrl: './card-details-list.component.html',
  styleUrls: ['./card-details-list.component.scss'],
})
export default class CardDetailsListComponent {
  @Input() statistics: TStatistics = {} as TStatistics;
}
