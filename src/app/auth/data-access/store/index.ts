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
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment';
import * as fromAuth from './auth.reducer'
import * as fromAdsState from '../../../shared-advertisements/data-access/store/'
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
  selectToken,
  (auth, token) => {
    const jwtHelper = new JwtHelperService();
    if (!token || jwtHelper.isTokenExpired(token)) {
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

export const selectAdsOwnedByUser = createSelector(
  selectUserId,
  fromAdsState.selectAllAdvertisement,
  (userId, advertisements) => {
    return advertisements.filter(ads => ads.owner._id === userId);
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
