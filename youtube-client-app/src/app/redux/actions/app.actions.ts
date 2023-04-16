import { createAction, props } from '@ngrx/store';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import { INewCard } from '../state.models';

export const createCard = createAction(
  '[Admin Page] Create Card',
  props<{ customCard: INewCard }>(),
);

export const requestVideos = createAction(
  '[Search Input] Request Videos',
  props<{ value: string }>(),
);

export const loadVideos = createAction(
  '[Youtube API] Videos Loaded',
  props<{ videos: ISearchItem[] }>(),
);
