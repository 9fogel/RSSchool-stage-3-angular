import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  searchValue = '';

  submitSearchRequest(value: string): void {
    this.searchValue = value;
  }
}
