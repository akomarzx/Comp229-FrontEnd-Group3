import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromFeaturedAdsNav from '../store/featured-ads-nav/featured-ads-nav.reducer'

export const FeatureKey = 'homepage';

export interface State {
  featuredAdNav : fromFeaturedAdsNav.State
}

export const reducers: ActionReducerMap<State> = {
  featuredAdNav : fromFeaturedAdsNav.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const selectHomepageState = createFeatureSelector<State>(FeatureKey);

const selectFeatureAdNavState = createSelector(
  selectHomepageState,
  (homepageState) => homepageState.featuredAdNav
)

export const selectIsCarSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsCarSelected
)
export const selectIsElectroSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsElectroSelected
)
export const selectIsFashionSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsFashionSelected
)
export const selectIsSportsSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsSportsSelected
)
export const selectIsOtherSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsOthersSelected
)
export const selectIsAllSelected = createSelector(
  selectFeatureAdNavState,
  fromFeaturedAdsNav.selectIsAlllsSelected
)



