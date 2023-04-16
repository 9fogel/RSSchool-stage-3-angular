import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import * as appActions from 'src/app/redux/actions/app.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export default class YoutubeApiEffects {
  constructor(private youtubeService: YoutubeService, private actions$: Actions) {}

  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.requestVideos),
      mergeMap(({ value }) =>
        this.youtubeService.getVideos(value).pipe(
          map((videos) =>
            appActions.loadVideos({
              videos,
            }),
          ),
        ),
      ),
    ),
  );

  getVideoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.requestVideoById),
      mergeMap(({ value }) =>
        this.youtubeService
          .getStatistics(value)
          .pipe(map((videos) => appActions.loadVideoById({ videos }))),
      ),
    ),
  );
}
