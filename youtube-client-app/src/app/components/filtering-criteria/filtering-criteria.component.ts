import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export default class FilteringCriteriaComponent {
  @Output() newClickEvent = new EventEmitter<string[]>();

  @Output() newSearchEvent = new EventEmitter<string>();

  searchValue?: string;

  private order: { [key: string]: string } = {
    date: 'default',
    views: 'default',
  };

  private searchRequestSubmitted = false;

  onClick(sortOption: string): void {
    if (this.order[sortOption] === 'default' || this.order[sortOption] === 'asc') {
      this.order[sortOption] = 'desc';
    } else if (this.order[sortOption] === 'desc') {
      this.order[sortOption] = 'asc';
    }
    this.newClickEvent.emit([sortOption, this.order[sortOption]]);
  }

  submitSearchRequest(value: string | undefined): void {
    this.searchRequestSubmitted = true;
    this.newSearchEvent.emit(value);
  }
}
