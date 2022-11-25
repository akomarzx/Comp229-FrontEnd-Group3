import { createAction, props } from '@ngrx/store';
import { RegistrationCredential } from '../models/registration-model';

export const onRegistrationCommenced = createAction(
  '[Registration Page] Registration Commenced',
  props<{ cerdential: RegistrationCredential }>()
)

export const onRegistrationSuccess = createAction(
  '[Registration Page] Registration Successful'
)

export const onRegistrationFail = createAction(
  '[Registration Page] Registration Failed'
)
