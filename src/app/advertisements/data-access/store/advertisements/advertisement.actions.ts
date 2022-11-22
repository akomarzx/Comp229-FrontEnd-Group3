import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Advertisement, AdvertRequiredProps } from '../../models/advertisement.model';

export const onStartup = createAction(
  '[Advertisement Shared] OnStartup'
)

export const onCreateNewAdvertisement = createAction(
  '[Create Advert Page] Create New Advert',
  props<{ newAdvert: AdvertRequiredProps }>()
)

export const onUpdateAdvertisement = createAction(
  '[Update Advert] Update Advert',
  props<{ id: string, advertChange: Update<AdvertRequiredProps> }>()
)

export const loadAdvertisementsSuccess = createAction(
  '[Advertisement/API] Load Advertisements Success',
  props<{ advertisements: Advertisement[] }>()
);

export const loadAdvertisementsFailure = createAction(
  '[Advertisement/API] Load Advertisements Failure',
  props<{ errorMessage: string }>()
);

export const addAdvertisementSuccess = createAction(
  '[Advertisement/API] Add Advertisement Success',
  props<{ advertisement: Advertisement }>()
);

export const addAdvertisementFailure = createAction(
  '[Advetisement/API] Add Advertisement Failure',
  props<{ errorMessage: string }>
)

export const updateAdvertisementSuccess = createAction(
  '[Advertisement/API] Update Advertisement Success',
  props<{ advertisement: Update<Advertisement> }>()
);

export const updateAdvertisementFailure = createAction(
  '[Advertisement/API] Update Advertisement Success',
  props<{ errorMessage: string }>()
);

