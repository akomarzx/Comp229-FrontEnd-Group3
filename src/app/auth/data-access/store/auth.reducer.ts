import { routerRequestAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAuthActions from './auth.actions'
//TODO: put the user into its own module

export interface State {
  isAuthPending: boolean,
  isAuthenticated: boolean,
  errorMessage: string
  token: string,
  expiry: string,
  firstName: string,
  lastName: string,
  email: string,
  _id: string,
}

export const initialState: State = {
  isAuthPending: false,
  isAuthenticated: false,
  errorMessage: '',
  token: '',
  expiry: '',
  firstName: '',
  lastName: '',
  email: '',
  _id: ''
};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.RegistrationCommenced, fromAuthActions.LoginCommenced, (state, action): State => {
    return {
      ...state,
      isAuthPending: true
    }
  }),
  on(fromAuthActions.onRegistrationSuccess, fromAuthActions.onRegistrationFail, fromAuthActions.onLogInFail, (state, action): State => {
    return {
      ...state,
      isAuthPending: false,
      errorMessage: action.message
    }
  }),
  on(fromAuthActions.onLogInSuccess, (state, action): State => {
    return {
      ...state,
      isAuthPending: false,
      isAuthenticated: true,
      errorMessage: '',
      token: action.token,
      expiry: action.expiry,
      _id: action._id,
    }
  }),
  on(routerRequestAction, (state, action): State => {
    return {
      ...state,
      errorMessage: ''
    }
  })
);

export const selectToken = (state : State) => state.token;
export const selectExpiry = (state: State) => state.expiry;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectUserId = (state: State) => state._id;
