import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  searchValue?: string;

  submitSearchRequest(value: string | undefined): void {
    this.searchValue = value;
  }
}
