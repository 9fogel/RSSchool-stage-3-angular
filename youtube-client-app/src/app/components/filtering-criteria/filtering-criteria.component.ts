import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export default class FilteringCriteriaComponent {
  order: { [key: string]: string } = {
    date: 'default',
    views: 'default',
  };

  @Output() newClickEvent = new EventEmitter<string[]>();

  onClick(sortOption: string) {
    if (this.order[sortOption] === 'default' || this.order[sortOption] === 'asc') {
      this.order[sortOption] = 'desc';
    } else if (this.order[sortOption] === 'desc') {
      this.order[sortOption] = 'asc';
    }
    this.newClickEvent.emit([sortOption, this.order[sortOption]]);
  }

  searchValue?: string;

  searchRequestSubmitted = false;

  @Output() newSearchEvent = new EventEmitter<string>();

  submitSearchRequest(value: string | undefined): void {
    this.searchRequestSubmitted = true;
    this.newSearchEvent.emit(value);
  }
}
