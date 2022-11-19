import { BaseRouterStoreState, routerReducer, RouterReducerState, RouterState } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAppState from './app-state.reducer';

export const FeatureKey = 'global';

export interface State {
  appState: fromAppState.State,
}

export const reducers: ActionReducerMap<State> = {
  appState: fromAppState.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectGlobalState = createFeatureSelector<State>(FeatureKey);

export const selectAppState = createSelector(
  selectGlobalState,
  (fromGlobal) => fromGlobal.appState
)

export const selectHasError = createSelector(
  selectAppState,
  (fromAppState) => fromAppState.hasError
)

export const selectErrorMessage = createSelector(
  selectAppState,
  (fromAppState) => fromAppState.errorMessage
)
