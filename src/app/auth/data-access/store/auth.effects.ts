import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, delay, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as fromAuthActions from './auth.actions';


@Injectable()
export class AuthEffects {


  constructor(private actions$: Actions, private authService: AuthService) { }

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.RegistrationCommenced),
      delay(3000),
      map(action => action.credential),
      switchMap((credential) => {
        return this.authService.signUp(credential)
          .pipe(
            map(({ message }) => fromAuthActions.onRegistrationSuccess({ message: message })),
            catchError(({ message }) => of(fromAuthActions.onRegistrationFail({ message: message }))),
            tap((error) => {
              console.log(error);
            })
          )
      })
    )
  })

}
