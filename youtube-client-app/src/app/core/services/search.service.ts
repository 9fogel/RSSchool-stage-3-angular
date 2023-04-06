import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  searchValue = '';

  submitSearchRequest(value: string): void {
    this.searchValue = value;
  }
}