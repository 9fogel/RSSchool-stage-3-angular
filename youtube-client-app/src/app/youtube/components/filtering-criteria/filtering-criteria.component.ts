import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOrder } from 'src/app/youtube/model/common.enum';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export default class FilteringCriteriaComponent {
  @Output() newClickEvent = new EventEmitter<string[]>();

  @Output() newSearchEvent = new EventEmitter<string>();

  private order: { [key: string]: string } = {
    date: FilterOrder.Default,
    views: FilterOrder.Default,
  };

  private searchRequestSubmitted = false;

  onClick(sortOption: string): void {
    if (
      this.order[sortOption] === FilterOrder.Default ||
      this.order[sortOption] === FilterOrder.Asc
    ) {
      this.order[sortOption] = FilterOrder.Desc;
    } else if (this.order[sortOption] === FilterOrder.Desc) {
      this.order[sortOption] = FilterOrder.Asc;
    }
    this.newClickEvent.emit([sortOption, this.order[sortOption]]);
  }

  submitSearchRequest(value: string | undefined): void {
    this.searchRequestSubmitted = true;
    this.newSearchEvent.emit(value);
  }
}
