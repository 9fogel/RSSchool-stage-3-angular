import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class FiltersService {
  // constructor() {}
  public filtersShown = false;

  openFilters() {
    this.filtersShown = !this.filtersShown;
  }
}
