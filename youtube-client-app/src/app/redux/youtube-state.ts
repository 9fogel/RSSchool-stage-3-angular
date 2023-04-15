import { NgModule } from '@angular/core';
import { ActionReducerMap, MetaReducer, StoreModule, createFeatureSelector } from '@ngrx/store';
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
export class  YoutubeStateModule {}

export const selectSharedYoutubeState = createFeatureSelector<State>(FEATURE_KEY);

export const selectYoutubeState = createSelector(selectSharedYoutubeState, SharedYoutubeFeatureState = SharedYoutubeState.)
