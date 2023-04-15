import { createAction, props } from '@ngrx/store';
// import { ISearchResponse } from 'src/app/youtube/model/search-response.model';
// import { ISearchItem } from 'src/app/youtube/model/search-item.model';
// import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';
import { Observable } from 'rxjs';
import { INewCard } from '../state.models';

export const createCard = createAction(
  '[Admin Page] Create Card',
  props<{ customCard: INewCard }>(),
  // props<{ customCard: INewCard }>(),
);

export const loadVideos = createAction(
  '[Youtube API] Videos Loaded',
  props<{ videos: Observable<ISearchItem[]> }>(),
);
// export const getVideos = createAction(
//   '[Youtube API] Videos Loaded',
//   props<{ items: Observable<ISearchItem[]> }>(),
// );
