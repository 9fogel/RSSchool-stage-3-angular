import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import SearchService from 'src/app/core/services/search.service';
import { ISearchItem } from '../model/search-item.model';
import { ISearchResponse } from '../model/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  videos$?: Observable<ISearchItem[]>;

  private readonly SEARCH_ENDPOINT = 'search';

  private readonly VIDEOS_ENDPOINT = 'videos';

  private RESULTS_LIMIT = 15;

  constructor(private http: HttpClient, private searchService: SearchService) {}

  getVideos(searchValue: string): Observable<ISearchItem[]> {
    return this.http
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
          this.videos$ = this.getStatistics(ID_STRING);

          return this.videos$;
        }),
        catchError((error) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      );
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
