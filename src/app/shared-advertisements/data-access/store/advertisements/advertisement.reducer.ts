import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Advertisement } from '../../models/advertisement.model';
import * as AdvertisementActions from './advertisement.actions';
import { routerRequestAction } from '@ngrx/router-store';

export const advertisementsFeatureKey = 'advertisements';

export function selectAdId(ads: Advertisement): string {
  //In this case this would be optional since primary key is id
  return ads._id;
}

export interface State extends EntityState<Advertisement> {
  isApiDoneLoading: boolean,
  hasErrorFromApi: boolean,
  errorMessage: string
}

export const adapter: EntityAdapter<Advertisement> = createEntityAdapter<Advertisement>({
  selectId: selectAdId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  isApiDoneLoading: true,
  hasErrorFromApi: false,
  errorMessage: ''
});

export const reducer = createReducer<State>(
  initialState,
  on(AdvertisementActions.onStartup,
    (state, action): State => {
      return {
        ...state,
        isApiDoneLoading: false
      }
    }),
  on(AdvertisementActions.createAdvertisementSuccess,
    (state, action) => adapter.addOne(action.advertisement, { ...state, isApiDoneLoading: true })
  ),
  on(AdvertisementActions.createAdvertisementFailure,
    (state, action): State => {
      return {
        ...state,
        hasErrorFromApi: true,
        errorMessage: action.errorMessage,
        isApiDoneLoading: true
      }
    }),
  on(AdvertisementActions.updateAdvertisementSuccess,
    (state, action) => adapter.updateOne(action.advertisement, { ...state, isApiDoneLoading: true })
  ),
  on(AdvertisementActions.updateAdvertisementFailure,
    (state, action): State => {
      return {
        ...state,
        hasErrorFromApi: true,
        errorMessage: action.errorMessage,
        isApiDoneLoading: true
      }
    }),
  on(AdvertisementActions.loadAdvertisementsSuccess,
    (state, { advertisements }) => adapter.setAll(advertisements, { ...state, isApiDoneLoading: true })
  ),
  on(AdvertisementActions.loadAdvertisementsFailure,
    (state, action): State => {
      return {
        ...state,
        hasErrorFromApi: true,
        errorMessage: action.errorMessage,
        isApiDoneLoading: true
      }
    }
  ),
  on(AdvertisementActions.OnErrorDismissed, routerRequestAction,
    (state, action): State => {
      return {
        ...state,
        hasErrorFromApi: false,
        errorMessage: ''
      }
    }),
  on(AdvertisementActions.onResolveAdvertisementFailure,
    (state, action): State => {
      return {
        ...state,
        hasErrorFromApi: true,
        errorMessage: action.message
      }
    })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


// select the array of Ads
export const selectUserIds = selectIds;

// select the dictionary of Ads
export const selectAdvertisementEntities = selectEntities;

// select the array of ads
export const selectAllAdvertisement = selectAll;

// select the total ads
export const selectUserTotal = selectTotal;

export const selectIsApiDoneLoading = (state: State) => state.isApiDoneLoading;
export const selectHasApiError = (state: State) => state.hasErrorFromApi;
export const selectErrorMessage = (state: State) => state.errorMessage;
