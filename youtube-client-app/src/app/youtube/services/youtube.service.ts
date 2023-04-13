import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { ISearchItem } from '../model/search-item.model';
import { ISearchResponse } from '../model/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  videos?: Array<ISearchItem>;

  private readonly SEARCH_ENDPOINT = 'search';

  private readonly VIDEOS_ENDPOINT = 'videos';

  private RESULTS_LIMIT = 15;

  constructor(private http: HttpClient) {}

  getVideos(searchValue: string): void {
    this.http
      .get<ISearchResponse>(this.SEARCH_ENDPOINT, {
        params: {
          type: 'video',
          part: 'snippet',
          maxResults: this.RESULTS_LIMIT,
          q: searchValue,
        },
      })
      .pipe(
        switchMap((response) => {
          const ID_STRING = response.items.map((items) => items.id.videoId).join(',');

          return this.getStatistics(ID_STRING);
        }),
        catchError((error) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      )
      .subscribe((response) => {
        this.videos = response;
      });
  }

  getStatistics(id: string): Observable<ISearchItem[]> {
    return this.http
      .get<ISearchResponse>(this.VIDEOS_ENDPOINT, {
        params: {
          id,
          part: 'snippet,statistics',
        },
      })
      .pipe(
        map((response) => response.items),
        catchError((error) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      );
  }
}
