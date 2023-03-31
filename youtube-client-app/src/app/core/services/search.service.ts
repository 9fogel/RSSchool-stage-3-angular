import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  // constructor() {}
  searchValue?: string;

  private searchRequestSubmitted = false;

  saveSearchRequest() {
    return this.searchValue;
  }

  submitSearchRequest(value: string | undefined): void {
    this.searchRequestSubmitted = true;
    this.searchValue = value;
    console.log(this.searchValue);
  }
}
