import { AppState } from '../reducers/app.reducer';

// eslint-disable-next-line import/prefer-default-export
export const showAllVideos = (state: AppState) => state.youtubeVideos;

export const showAllCustomCards = (state: AppState) => state.customCards;
