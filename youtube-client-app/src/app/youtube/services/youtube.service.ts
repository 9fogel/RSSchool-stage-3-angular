import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { ISearchItem } from '../model/search-item.model';
import { ISearchResponse } from '../model/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  private readonly YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

  private readonly SEARCH_ENDPOINT = 'search';

  private readonly VIDEOS_ENDPOINT = 'videos';

  private readonly API_KEY = 'AIzaSyDK2s2EBdJsU4zM_5-OiMnIYxT9enkCEE8';

  private RESULTS_LIMIT = 15;

  constructor(private http: HttpClient) {}

  getVideos(searchValue: string): Observable<string> {
    return this.http
      .get<ISearchResponse>(`${this.YOUTUBE_URL}/${this.SEARCH_ENDPOINT}`, {
        params: {
          key: this.API_KEY,
          type: 'video',
          part: 'snippet',
          maxResults: this.RESULTS_LIMIT,
          q: searchValue,
        },
      })
      .pipe(
        map((response) => response.items.map((items) => items.id.videoId).join(',')),
        catchError((error) => {
          console.log('[ERROR]', error);
          return EMPTY;
        }),
      );
  }

  getStatistics(id: string): Observable<ISearchItem[]> {
    return this.http
      .get<ISearchResponse>(`${this.YOUTUBE_URL}/${this.VIDEOS_ENDPOINT}`, {
        params: {
          key: this.API_KEY,
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
