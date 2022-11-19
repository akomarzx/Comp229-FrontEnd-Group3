import { createAction, props } from '@ngrx/store';

export const onAppStates = createAction(
  '[AppState] On AppStates'
);

export const onAppStatesSuccess = createAction(
  '[AppState] On AppStates Success',
  props<{ data: any }>()
);

export const onAppStatesFailure = createAction(
  '[AppState] On AppStates Failure',
  props<{ error: any }>()
);

export const onResolveAdsError = createAction(
  '[App State] On Error',
  props<{ message: string }>()
)

export const onResolveErrorClear = createAction(
  '[App State] On Error Clear'
)
