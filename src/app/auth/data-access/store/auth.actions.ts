import { createAction, props } from '@ngrx/store';
import { RegistrationCredential } from '../models/registration-model';
import { User } from '../models/user.model'
export const RegistrationCommenced = createAction(
  '[Registration Page] Registration Commenced',
  props<{ credential: any }>()
)

export const onRegistrationSuccess = createAction(
  '[Auth Api] Registration Successful',
  props<{ message: string }>()
)

export const onRegistrationFail = createAction(
  '[Auth Api] Registration Failed',
  props<{ message: string }>()
)

export const LoginCommenced = createAction(
  '[Login Page] Login Commenced',
  props<{ credential: any }>()
)

export const onLogInSuccess = createAction(
  '[Auth Api] Login Successful',
  props<{ message: string, token: string, expiry: string, user: User }>()
)

export const onLogInFail = createAction(
  '[Auth Api] Login Failed',
  props<{ message: string }>()
)
