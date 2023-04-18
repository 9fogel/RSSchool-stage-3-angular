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

export const requestVideoById = createAction(
  '[Details Card] Request Video By Id',
  props<{ value: string }>(),
);

export const loadVideos = createAction(
  '[Youtube API] Videos Loaded',
  props<{ videos: ISearchItem[] }>(),
);

export const loadVideosFailed = createAction(
  '[Youtube API] Videos Loading Failed',
  props<{ error: Error }>(),
);

export const loadVideoById = createAction(
  '[Youtube API] Video By Id Loaded',
  props<{ videos: ISearchItem[] }>(),
);

export const loadVideoByIdFailed = createAction(
  '[Youtube API] Video By Id Loading Failed',
  props<{ error: Error }>(),
);
