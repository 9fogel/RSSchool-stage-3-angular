import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client-app';

  filtersOpened = false;

  searchFilterValue?: string;

  searchValue?: string;

  sortingData = ['views', 'default'];

  addItem(newItem: string): void {
    this.searchValue = newItem;
  }

  applySearch(event: string): void {
    this.searchFilterValue = event;
  }

  applySorting(event: Array<string>): void {
    this.sortingData = event;
  }

  switchFiltersView(event: boolean): void {
    this.filtersOpened = event;
  }
}
