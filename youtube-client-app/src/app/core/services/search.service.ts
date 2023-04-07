import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  searchValue$ = new Subject<string>();

  submitSearchRequest(value: string): void {
    this.searchValue$.next(value);
  }
}
