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

  filterData = ['views', 'default'];

  addItem(newItem: string): void {
    this.searchValue = newItem;
  }

  switchFiltersView(event: boolean): void {
    this.filtersOpened = event;
  }

  applyFilter(event: Array<string>): void {
    this.filterData = event;
  }
}
