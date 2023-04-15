import { NgModule } from '@angular/core';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import * as appState from 'src/app/redux/reducers/app.reducer';

export const FEATURE_KEY = 'youtube';

export interface State {
  youtubeVideos: appState.AppState;
}

export const reducers: ActionReducerMap<State> = {
  youtubeVideos: appState.videosReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class YoutubeStateModule {}
