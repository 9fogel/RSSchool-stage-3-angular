import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client-app';

  searchValue?: string;

  filtersOpened = false;

  sortingData = ['views', 'default'];

  searchFilterValue?: string;

  addItem(newItem: string): void {
    this.searchValue = newItem;
  }

  switchFiltersView(event: boolean): void {
    this.filtersOpened = event;
  }

  applySorting(event: Array<string>): void {
    this.sortingData = event;
  }

  applySearch(event: string): void {
    this.searchFilterValue = event;
  }
}
