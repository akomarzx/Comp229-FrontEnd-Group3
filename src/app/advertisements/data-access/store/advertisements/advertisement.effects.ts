import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { createAction, Store } from '@ngrx/store';
import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs';
import { AdvertisementsService } from '../../service/advertisements.service';
import * as fromAdvertisementActions from './advertisement.actions'
import { AdvertRequiredProps, Advertisement } from '../../models/advertisement.model'
//TODO: Error Handling
@Injectable()
export class AdvertisementApiEffects {

  constructor(private actions$: Actions, private adsSevice: AdvertisementsService, private store: Store, private router: Router) { }

  loadAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdvertisementActions.onStartup),
      concatMap(() => {
        return this.adsSevice.getAdvertisements()
          .pipe(
            map((advertisements) => fromAdvertisementActions.loadAdvertisementsSuccess({ advertisements }))
          )
      })
    )
  })

  //TODO: Redirect to show page after creation
  createAdvertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdvertisementActions.onCreateNewAdvertisement),
      map(action => action.newAdvert),
      concatMap((newAdvert) => {
        return this.adsSevice.createAdvertisement(newAdvert).pipe(
          tap((data) => {
            this.router.navigate(['/advertisements/', data._id]);
          }),
          map((newAdvertisement) => fromAdvertisementActions.addAdvertisementSuccess({ advertisement: newAdvertisement }))
        )
      })
    )
  }
  )

  updateAdvertisementt$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdvertisementActions.onUpdateAdvertisement),
      map(action => {
        return action
      }),
      switchMap((action) => {
        return this.adsSevice.updateAdvertisement(action.advertisement).pipe(
          tap((data) => {
            this.router.navigate(['/advertisements/', data._id]);
          }),
          map((updatedAdvertisement) => fromAdvertisementActions.updateAdvertisementSuccess({ advertisement: {id: updatedAdvertisement._id, changes: updatedAdvertisement} }))
        )
      })
    )
  }
  )
}
