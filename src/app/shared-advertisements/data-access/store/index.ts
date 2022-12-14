import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { from, map, of, skip, skipWhile, switchMap } from 'rxjs';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
import { environment } from '../../../../environments/environment';
import { Advertisement } from '../models/advertisement.model';
import * as fromAdvertisements from './advertisements/advertisement.reducer'

export const FeatureKey = 'Advertisements';

export interface State {
  advertisements: fromAdvertisements.State
}

export const reducers: ActionReducerMap<State> = {
  advertisements: fromAdvertisements.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

//Get the feature state from the global state
export const selectAdvertisementFeature = createFeatureSelector<State>(FeatureKey);

//Get the slice of the feature state
export const selectAdvertismentSlice = createSelector(
  selectAdvertisementFeature,
  (featureState) => featureState.advertisements
)

//TODO: find a way to only get certain number of elements but for now get all
export const selectAllAdvertisement = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectAllAdvertisement
)

//Get all entities
export const selectAdvertisementsEntities = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectAdvertisementEntities
)

//Select one entity
export const selectAdvertisement = createSelector(
  selectAdvertisementsEntities,
  selectRouteParams,
  (advertisements, { _id }) => advertisements[_id]
);

export const selectIsAdvertisementExpired = createSelector(
  selectAdvertisement,
  (ad) => {
    if (!ad) {
      return false;
    }
    let expiry = new Date(ad!.expiryDate).getTime();
    let now = new Date().setHours(0, 0, 0, 0);
    return expiry >= now;
  }
)

export const selectIsApiLoading = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectIsApiDoneLoading
)

export const selectHasApiErrored = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectHasApiError
)

export const selectErrorMessage = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectErrorMessage
)

function getFeturedAdsbyCategory(category: string, advertisements: Advertisement[]) {
  let ads = advertisements.filter(ads => ads.description.category === category);
  let featuredAds = ads.slice(0, (ads.length >= 5 ? 4 : ads.length));
  return featuredAds;
}

export const selectValidAds = createSelector(
  selectAllAdvertisement,
  (adverts) => {
    return adverts.filter((ads) => {
      let active = new Date(ads.activeDate).getTime();
      let expiry = new Date(ads.expiryDate).getTime();
      let now = new Date().setHours(0, 0, 0, 0);
      return active <= now && expiry >= now;
    })
  }
)

export const selectFeaturedCarsAds = createSelector(
  selectValidAds,
  (advertisments) => {
    return getFeturedAdsbyCategory('cars', advertisments);
  }
)

export const selectFeaturedFashionAds = createSelector(
  selectValidAds,
  (advertisments) => {
    return getFeturedAdsbyCategory('fashion', advertisments);
  }
)

export const selectGadgetAds = createSelector(
  selectValidAds,
  (advertisments) => {
    return getFeturedAdsbyCategory('electronics', advertisments);
  }
)

export const selectSportsAds = createSelector(
  selectValidAds,
  (advertisments) => {
    return getFeturedAdsbyCategory('sports', advertisments);
  }
)

export const selectOtherAds = createSelector(
  selectValidAds,
  (advertisement) => {
    return getFeturedAdsbyCategory('others', advertisement)
  }
)


