import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, delay, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as fromAuthActions from './auth.actions';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';




@Injectable()
export class AuthEffects {

  decodeAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.RegistrationCommenced),
      map(action => action.credential),
      switchMap((credential) => {
        return this.authService.signUp(credential)
          .pipe(
            tap(() => {
              this.router.navigate(['/auth/login']);
              // TODO: Remove in the final release
              alert('Succesfully Registered, (Remove Alert in final release)');
            }),
            map(({ message }) => fromAuthActions.onRegistrationSuccess({ message: message })),
            catchError((error) => of(fromAuthActions.onRegistrationFail({ message: error.error.message }))),
          )
      })
    )
  })

  logInUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.LoginCommenced),
      map(action => action.credential),
      switchMap((credential) => {
        return this.authService.logIn(credential)
          .pipe(
            map(({ token, message }) => {
              const tokenInfo = this.decodeAccessToken(token)
              console.log(tokenInfo)
              return {
                expiresIn: tokenInfo.exp,
                token: token,
                message: message,
                user: {
                  _id: tokenInfo.payload._id,
                  firstName: tokenInfo.payload.firstName,
                  lastName: tokenInfo.payload.lastName,
                  email: tokenInfo.payload.email
                }
              }
            }),
            map(({ message, token, expiresIn, user }) => fromAuthActions.onLogInSuccess({ message: message, token: token, user: user, expiry: expiresIn })),
            tap(() => {
              this.router.navigateByUrl('/');
            }),
            catchError((error) => of(fromAuthActions.onLogInFail({ message: error.error.message }))),
          )
      })
    )
  })
}
