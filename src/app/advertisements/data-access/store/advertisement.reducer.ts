import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Advertisement } from '../models/advertisement.model';
import * as AdvertisementActions from './advertisement.actions';

export const advertisementsFeatureKey = 'advertisements';

export function selecAdId(ads: Advertisement): string {
  //In this case this would be optional since primary key is id
  return ads._id;
}

export interface State extends EntityState<Advertisement> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Advertisement> = createEntityAdapter<Advertisement>({
  selectId : selecAdId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(AdvertisementActions.addAdvertisement,
    (state, action) => adapter.addOne(action.advertisement, state)
  ),
  on(AdvertisementActions.upsertAdvertisement,
    (state, action) => adapter.upsertOne(action.advertisement, state)
  ),
  on(AdvertisementActions.addAdvertisements,
    (state, action) => adapter.addMany(action.advertisements, state)
  ),
  on(AdvertisementActions.upsertAdvertisements,
    (state, action) => adapter.upsertMany(action.advertisements, state)
  ),
  on(AdvertisementActions.updateAdvertisement,
    (state, action) => adapter.updateOne(action.advertisement, state)
  ),
  on(AdvertisementActions.updateAdvertisements,
    (state, action) => adapter.updateMany(action.advertisements, state)
  ),
  on(AdvertisementActions.deleteAdvertisement,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AdvertisementActions.deleteAdvertisements,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AdvertisementActions.loadAdvertisements,
    (state, action) => adapter.setAll(action.advertisements, state)
  ),
  on(AdvertisementActions.clearAdvertisements,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
