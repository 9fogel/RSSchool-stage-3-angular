import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import * as appActions from 'src/app/redux/actions/app.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export default class YoutubeApiEffects {
  constructor(private youtubeService: YoutubeService, private actions$: Actions) {}

  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.requestVideos),
      mergeMap(({ value }) => this.youtubeService.getVideos(value)),
      map((videos) =>
        appActions.loadVideos({
          videos,
        }),
      ),
      catchError((error) => of(appActions.loadVideosFailed({ error }))),
    ),
  );

  getVideoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.requestVideoById),
      mergeMap(({ value }) => this.youtubeService.getStatistics(value)),
      map((videos) => appActions.loadVideoById({ videos })),
      catchError((error) => of(appActions.loadVideoByIdFailed({ error }))),
    ),
  );
}
