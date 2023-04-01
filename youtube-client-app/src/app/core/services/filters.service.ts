import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class FiltersService {
  public filtersShown = false;

  openFilters(): void {
    this.filtersShown = !this.filtersShown;
  }
}
