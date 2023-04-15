import { createAction, props } from '@ngrx/store';
// import { ISearchResponse } from 'src/app/youtube/model/search-response.model';
// import { ISearchItem } from 'src/app/youtube/model/search-item.model';
// import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import { Observable } from 'rxjs';
import { INewCard } from '../state.models';

// eslint-disable-next-line import/prefer-default-export
export const createCard = createAction(
  '[Admin Page] Create Card',
  props<{ customCard: INewCard }>(),
);

export const loadVideos = createAction(
  '[Youtube API] Videos Loaded',
  props<Observable<ISearchItem[]>>(),
);
// export const getVideos = createAction(
//   '[Youtube API] Videos Loaded',
//   props<{ items: Observable<ISearchItem[]> }>(),
// );
