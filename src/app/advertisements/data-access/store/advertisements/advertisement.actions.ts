import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Advertisement } from '../../models/advertisement.model';

export const loadAdvertisements = createAction(
  '[Advertisement/API] Load Advertisements',
  props<{ advertisements: Advertisement[] }>()
);

export const addAdvertisement = createAction(
  '[Advertisement/API] Add Advertisement',
  props<{ advertisement: Advertisement }>()
);

export const upsertAdvertisement = createAction(
  '[Advertisement/API] Upsert Advertisement',
  props<{ advertisement: Advertisement }>()
);

export const addAdvertisements = createAction(
  '[Advertisement/API] Add Advertisements',
  props<{ advertisements: Advertisement[] }>()
);

export const upsertAdvertisements = createAction(
  '[Advertisement/API] Upsert Advertisements',
  props<{ advertisements: Advertisement[] }>()
);

export const updateAdvertisement = createAction(
  '[Advertisement/API] Update Advertisement',
  props<{ advertisement: Update<Advertisement> }>()
);

export const updateAdvertisements = createAction(
  '[Advertisement/API] Update Advertisements',
  props<{ advertisements: Update<Advertisement>[] }>()
);

export const deleteAdvertisement = createAction(
  '[Advertisement/API] Delete Advertisement',
  props<{ id: string }>()
);

export const deleteAdvertisements = createAction(
  '[Advertisement/API] Delete Advertisements',
  props<{ ids: string[] }>()
);

export const clearAdvertisements = createAction(
  '[Advertisement/API] Clear Advertisements'
);
