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
  on(fromAuthActions.RegistrationCommenced, (state, action): State => {
    return {
      ...state,
      isAuthPending: true
    }
  }),
  on(fromAuthActions.onRegistrationSuccess, fromAuthActions.onRegistrationFail, (state, action): State => {
    return {
      ...state,
      isAuthPending: false,
      errorMessage: action.message
    }
  })
);

