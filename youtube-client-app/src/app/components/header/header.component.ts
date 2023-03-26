import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  searchValue?: string;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string | undefined) {
    this.newItemEvent.emit(value);
  }

  filtersShown = false;

  @Output() newButtonEvent = new EventEmitter<boolean>();

  changeOpenStatus(): void {
    this.filtersShown = !this.filtersShown;
  }

  openFilters() {
    this.changeOpenStatus();
    this.newButtonEvent.emit(this.filtersShown);
  }

  searchRequestSubmitted = false;

  values = [1, 2, 3, 4];

  name = 'Vera';

  submitSearchRequest(): void {
    this.searchRequestSubmitted = true;
  }
}
