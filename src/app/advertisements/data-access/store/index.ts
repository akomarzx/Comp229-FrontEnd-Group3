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

export const selectIsApiLoading = createSelector(
  selectAdvertismentSlice,
  fromAdvertisements.selectIsApiDoneLoading
)
