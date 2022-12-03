import { createAction, props } from '@ngrx/store';
import { RegistrationCredential } from '../models/registration-model';
import { User, UserProfile } from '../models/user.model'

export const onAppStartUp = createAction(
  '[Auth Shared] On App Init'
)

export const onCredentialFound = createAction(
  '[Auth Shared] On Credential Found',
  props<{ token: string, expiry: string, user: User }>()
)

export const onCredentialNotFound = createAction(
  '[Auth Shared] On Credential Not Found'
)

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

export const onLogOutCommenced = createAction(
  '[Shared Page] On Logout Commenced'
)
export const OnLogOut = createAction(
  '[Shared Page] Logout Finished'
)

export const onAuthErrorDismissed = createAction(
  '[App Component] On Error Dismissed'
)

export const onTokenExpiredInRouteGuard = createAction(
  '[Route Guard] On Token Expired'
)

export const onTokenExpiredInInterceptor = createAction(
  '[HTTP interceptor] On Token Expired'
)

export const onProfileUpdateCommenced = createAction(
  '[Profile Update Page] On Profile Update Commenced',
  props<{ userProfile: UserProfile }>()
)

export const onProfileUpdateSuccess = createAction(
  '[Auth Api] Profile Update Success',
  props<{ profile: UserProfile }>()
)

export const onProfileUpdateFail = createAction(
  '[Auth Api] Profile Update Fail',
  props<{ message: string }>()
)
