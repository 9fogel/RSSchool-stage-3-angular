import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

// eslint-disable-next-line import/prefer-default-export
// export const showAllVideos = (state: AppState) => state.youtubeVideos;

// export const showAllCustomCards = (state: AppState) => state.customCards;

export const getVideosState = createFeatureSelector<AppState>('youtube');
export const getCustomCardsState = createFeatureSelector<AppState>('admin');

export const getAllVideos = createSelector(getVideosState, (state) => state.youtubeVideos);
export const getVideoById = createSelector(getVideosState, (state) => state.videoById);
export const getCustomCards = createSelector(getCustomCardsState, (state) => state.customCards);
