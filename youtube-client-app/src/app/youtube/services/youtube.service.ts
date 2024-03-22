import { Injectable } from '@angular/core';
import response from '../../data/response.json';
import { ISearchItem } from '../model/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  searchItems: Array<ISearchItem> = response.items;
}
