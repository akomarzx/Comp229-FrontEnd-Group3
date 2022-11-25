import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromAuth from './auth.reducer'

export const authFeatureKey = 'Auth';

export interface State {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectAuthFeatureSlice = createFeatureSelector<State>(authFeatureKey);

export const selectAuth = createSelector(
  selectAuthFeatureSlice,
  (authState) => authState.auth
)

export const selectToken = createSelector(
  selectAuth,
  fromAuth.selectToken
)
