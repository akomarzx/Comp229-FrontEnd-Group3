import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Advertisement, AdvertRequiredProps } from '../../models/advertisement.model';

export const onStartup = createAction(
  '[Advertisement Shared] OnStartup'
)

export const OnErrorDismissed = createAction(
  '[Advertisement Shared] On Error Dismissed'
)

export const onCreateNewAdvertisement = createAction(
  '[Create Advert Page] Create New Advert',
  props<{ newAdvert: AdvertRequiredProps }>()
)

export const onUpdateAdvertisement = createAction(
  '[Update Advert Page] Update Advert',
  props<{ advertisement: Update<Advertisement> }>()
)

export const loadAdvertisementsSuccess = createAction(
  '[Advertisement/API] Load Advertisements Success',
  props<{ advertisements: Advertisement[] }>()
);

export const loadAdvertisementsFailure = createAction(
  '[Advertisement/API] Load Advertisements Failure',
  props<{ errorMessage: string }>()
);

export const createAdvertisementSuccess = createAction(
  '[Advertisement/API] Add Advertisement Success',
  props<{ advertisement: Advertisement }>()
);

export const createAdvertisementFailure = createAction(
  '[Advetisement/API] Add Advertisement Failure',
  props<{ errorMessage: string }>()
)

export const updateAdvertisementSuccess = createAction(
  '[Advertisement/API] Update Advertisement Success',
  props<{ advertisement: Update<Advertisement> }>()
);

export const updateAdvertisementFailure = createAction(
  '[Advertisement/API] Update Advertisement Success',
  props<{ errorMessage: string }>()
);

export const onResolveAdvertisementFailure = createAction(
  '[Advertisement Resolver] On Resolve Failure',
  props<{ message: string }>()
)


