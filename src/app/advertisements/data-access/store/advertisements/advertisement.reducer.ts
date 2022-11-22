import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Advertisement } from '../../models/advertisement.model';
import * as AdvertisementActions from './advertisement.actions';

export const advertisementsFeatureKey = 'advertisements';

export function selectAdId(ads: Advertisement): string {
  //In this case this would be optional since primary key is id
  return ads._id;
}

export interface State extends EntityState<Advertisement> {
  isApiDoneLoading: boolean
}

export const adapter: EntityAdapter<Advertisement> = createEntityAdapter<Advertisement>({
  selectId: selectAdId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  isApiDoneLoading: true
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
  on(AdvertisementActions.addAdvertisementSuccess,
    (state, action) => adapter.addOne(action.advertisement, state)
  ),
  on(AdvertisementActions.updateAdvertisementSuccess,
    (state, action) => adapter.updateOne(action.advertisement, state)
  ),
  on(AdvertisementActions.loadAdvertisementsSuccess,
    (state, { advertisements }) => adapter.setAll(advertisements, { ...state, isApiDoneLoading: true })
  ),
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

export const selectIsApiLoading = (state: State) => state.isApiDoneLoading;
