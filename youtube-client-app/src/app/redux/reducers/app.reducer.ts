import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import * as appActions from 'src/app/redux/actions/app.actions';
import { createReducer, on } from '@ngrx/store';
import { INewCard } from '../state.models';

const addCustomCard = (customCards: INewCard[], card: INewCard) => [...customCards, card];

export interface AppState {
  youtubeVideos: Observable<ISearchItem[]>; // ISearchItem[]
  customCards: INewCard[];
}

export const initialState: AppState = {
  youtubeVideos: new Observable<ISearchItem[]>(), // []
  customCards: [],
};

export const cardsReducer = createReducer(
  initialState,
  on(appActions.createCard, (state, { customCard }) => ({
    ...state,
    customCards: addCustomCard(state.customCards, customCard),
    // ...state,
    // customCard,
  })),
);

export const videosReducer = createReducer(
  initialState,
  on(appActions.loadVideos, (state, action) => ({
    ...state,
    youtubeVideos: action,
  })),
);
