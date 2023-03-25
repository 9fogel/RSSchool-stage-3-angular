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

  onClick(filter: string) {
    if (this.order[filter] === 'default' || this.order[filter] === 'asc') {
      this.order[filter] = 'desc';
    } else if (this.order[filter] === 'desc') {
      this.order[filter] = 'asc';
    }
    this.newClickEvent.emit([filter, this.order[filter]]);
  }
}
