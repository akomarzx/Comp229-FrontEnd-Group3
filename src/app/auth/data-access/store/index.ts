import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  select
} from '@ngrx/store';
import { selectAdvertisement } from 'src/app/shared-advertisements/data-access/store';
import { selectUserIds } from 'src/app/shared-advertisements/data-access/store/advertisements/advertisement.reducer';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
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

export const selectExpiry = createSelector(
  selectAuth,
  fromAuth.selectExpiry
)

export const selectIsAuthenticated = createSelector(
  selectAuth,
  selectExpiry,
  selectToken,
  // TODO: Check if the token is expired even if it is present
  (expiry, token) => {
    if (!token) {
      return false;
    }
    return true;
  }
)

export const selectUserId = createSelector(
  selectAuth,
  fromAuth.selectUserId
)

export const selectIsOwner = createSelector(
  selectUserId,
  selectAdvertisement,
  selectIsAuthenticated,
  (id, advertisement, isAuthenticated) => {
    if (!isAuthenticated) {
      return false;
    }
    if (id === advertisement?.owner._id) {
      return true
    }
    else {
      return false;
    }
  }
)

export const selectHasAuthError = createSelector(
  selectAuth,
  fromAuth.selectHasAuthError
)

export const selectAuthErrorMessage = createSelector(
  selectAuth,
  fromAuth.selectAuthErrorMessage
)

export const selectSuccessMessage = createSelector(
  selectAuth,
  fromAuth.selectSuccessMessage
)
