import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromAdvertisements from './advertisement.reducer'
export const FeatureKey = fromAdvertisements.advertisementsFeatureKey;

export interface State {
  advertisements : fromAdvertisements.State
}

export const reducers: ActionReducerMap<State> = {
  advertisements: fromAdvertisements.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
