import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, Store } from '@ngrx/store';
import { Router } from 'express';
import { concatMap, map, mergeMap, tap } from 'rxjs';
import { AdvertisementsService } from '../../service/advertisements.service';
import * as fromAdvertisementActions from './advertisement.actions'

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
        return this.adsSevice.createAdvertisement(newAdvert)
          .pipe(
            map((newAdvertisement) => fromAdvertisementActions.addAdvertisementSuccess({ advertisement: newAdvertisement })),
            tap(() => {
              
            })
          )
      })
    )
  }
  )
}
