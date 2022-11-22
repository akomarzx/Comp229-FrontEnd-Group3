import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, Store } from '@ngrx/store';
import { concatMap, map, mergeMap } from 'rxjs';
import { AdvertisementsService } from '../../service/advertisements.service';
import * as fromAdvertisementActions from './advertisement.actions'


@Injectable()
export class AdvertisementApiEffects {

  constructor(private actions$: Actions, private adsSevice: AdvertisementsService, private store: Store) { }

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
  }
  )
}
