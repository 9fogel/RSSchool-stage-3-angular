import { Component, Output, EventEmitter } from '@angular/core';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(private searchService: SearchService) {}

  @Output() newItemEvent = new EventEmitter<string>();

  @Output() newButtonEvent = new EventEmitter<boolean>();

  searchValue?: string;

  // searchValue = this.searchService.searchValue;

  private filtersShown = false;

  // private searchRequestSubmitted = false;

  getSearchResults(value: string | undefined): void {
    this.newItemEvent.emit(value);
  }

  openFilters(): void {
    this.changeOpenStatus();
    this.newButtonEvent.emit(this.filtersShown);
  }

  submitSearchRequest(value: string | undefined) {
    this.searchService.submitSearchRequest(value);
  }

  private changeOpenStatus(): void {
    this.filtersShown = !this.filtersShown;
  }
}
