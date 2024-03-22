import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class FiltersService {
  filtersShown = false;

  openFilters(): void {
    this.filtersShown = !this.filtersShown;
  }
}
