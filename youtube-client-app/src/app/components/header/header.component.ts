import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  @Output() newButtonEvent = new EventEmitter<boolean>();

  searchValue?: string;

  private filtersShown = false;

  private searchRequestSubmitted = false;

  addNewItem(value: string | undefined): void {
    this.newItemEvent.emit(value);
  }

  openFilters(): void {
    this.changeOpenStatus();
    this.newButtonEvent.emit(this.filtersShown);
  }

  submitSearchRequest(): void {
    this.searchRequestSubmitted = true;
  }

  private changeOpenStatus(): void {
    this.filtersShown = !this.filtersShown;
  }
}
