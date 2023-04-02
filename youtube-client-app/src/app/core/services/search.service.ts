import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  searchValue?: string;

  private searchRequestSubmitted = false;

  // saveSearchRequest(): string | undefined {
  //   return this.searchValue;
  // }

  submitSearchRequest(value: string | undefined): void {
    this.searchRequestSubmitted = true;
    this.searchValue = value;
  }
}
