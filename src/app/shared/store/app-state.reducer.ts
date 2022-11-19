import { routerRequestAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppState from './app-state.actions'

export interface State {
  hasError: boolean,
  errorMessage: string
}

export const initialState: State = {
  hasError: false,
  errorMessage: ''
};

export const reducer = createReducer(
  initialState,
  on(fromAppState.onResolveAdsError,
    (state, action): State => {
      return {
        ...state,
        hasError: true,
        errorMessage: action.message
      }
    }
  ),
  on(fromAppState.onErrorDismissed, routerRequestAction,
    (state): State => {
      return {
        ...state,
        hasError: false,
        errorMessage: ''
      }
    }),
);

export const selectHasError = (state: State) => state.hasError;
export const selectErrorMessage = (state: State) => state.errorMessage;
