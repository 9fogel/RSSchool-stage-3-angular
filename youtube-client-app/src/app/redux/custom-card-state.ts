import { NgModule } from '@angular/core';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import * as appState from 'src/app/redux/reducers/app.reducer';

export const FEATURE_KEY = 'custom-cards';

export interface State {
  customCards: appState.AppState;
}

export const reducers: ActionReducerMap<State> = {
  customCards: appState.cardsReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class CustomCardStateModule {}
