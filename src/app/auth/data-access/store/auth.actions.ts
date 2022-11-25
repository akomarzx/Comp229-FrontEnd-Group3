import { createAction, props } from '@ngrx/store';
import { RegistrationCredential } from '../models/registration-model';

export const RegistrationCommenced = createAction(
  '[Registration Page] Registration Commenced',
  props<{ credential: any }>()
)

export const onRegistrationSuccess = createAction(
  '[Registration Page] Registration Successful',
  props<{ message: string }>()
)

export const onRegistrationFail = createAction(
  '[Registration Page] Registration Failed',
  props<{ message: string }>()
)
