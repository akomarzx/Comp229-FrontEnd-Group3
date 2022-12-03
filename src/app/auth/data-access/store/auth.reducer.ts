import { routerRequestAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAuthActions from './auth.actions'
//TODO: put the user into its own module

export interface State {
  isAuthPending: boolean,
  isAuthenticated: boolean,
  errorMessage: string,
  succesMessage: string,
  hasAuthError: boolean,
  token: string,
  expiry: string,
  user: {
    firstName: string,
    lastName: string,
    email: string,
    _id: string,
    username: string
  }

}

export const initialState: State = {
  isAuthPending: false,
  isAuthenticated: false,
  errorMessage: '',
  succesMessage: '',
  hasAuthError: false,
  token: '',
  expiry: '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
    username: ''
  },

};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.RegistrationCommenced, fromAuthActions.LoginCommenced, (state, action): State => {
    return {
      ...state,
      isAuthPending: true
    }
  }),
  on(fromAuthActions.onRegistrationFail, fromAuthActions.onLogInFail, (state, action): State => {
    return {
      ...state,
      isAuthPending: false,
      errorMessage: action.message,
      hasAuthError: true
    }
  }),
  on(fromAuthActions.onRegistrationSuccess,
    (state, action): State => {
      return {
        ...state,
        isAuthPending: false,
        hasAuthError: false,
        succesMessage: action.message
      }
    }),
  on(fromAuthActions.onLogInSuccess, fromAuthActions.onCredentialFound, (state, action): State => {
    return {
      ...state,
      isAuthPending: false,
      isAuthenticated: true,
      errorMessage: '',
      token: action.token,
      expiry: action.expiry,
      user: {
        _id: action.user._id,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        username: action.user.username
      },
      hasAuthError: false
    }
  }),
  on(routerRequestAction, (state, action): State => {
    return {
      ...state,
      errorMessage: '',
      succesMessage: '',
      hasAuthError: false
    }
  }),
  on(fromAuthActions.OnLogOut, fromAuthActions.onCredentialNotFound,
    (state, action): State => {
      return {
        ...state,
        token: '',
        expiry: '',
        user: {
          _id: '',
          firstName: '',
          lastName: '',
          email: '',
          username: ''
        },
        isAuthenticated: false,
        errorMessage: 'You are logged out',
        hasAuthError: true
      }
    }),
  on(fromAuthActions.onAuthErrorDismissed,
    (state, action): State => {
      return {
        ...state,
        errorMessage: '',
        succesMessage: '',
        hasAuthError: false
      }
    })
);

export const selectToken = (state: State) => state.token;
export const selectExpiry = (state: State) => state.expiry;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectUserId = (state: State) => state.user._id;
export const selectHasAuthError = (state: State) => state.hasAuthError;
export const selectAuthErrorMessage = (state: State) => state.errorMessage;
export const selectSuccessMessage = (state: State) => state.succesMessage;
export const selectUser = (state : State) => state.user;
