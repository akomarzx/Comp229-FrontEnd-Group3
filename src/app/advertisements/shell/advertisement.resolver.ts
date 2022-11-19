import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of, tap } from 'rxjs';
import { Advertisement } from '../data-access/models/advertisement.model';
import { selectAdvertisement } from '../data-access/store';
import * as fromAppStateActions from '../../shared/store/app-state.actions';
@Injectable({
  providedIn: 'root'
})
// will use this resolver to make sure that
// params is present in the collection when editing or showing a single ad
export class AdvertisementResolver implements Resolve<any | undefined> {
  constructor(private store: Store) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any | undefined> {
    return this.store.select(selectAdvertisement).pipe(
      tap(
        (data) => {
          if (!data) {
            this.store.dispatch(fromAppStateActions.onResolveAdsError({ message: 'Oh-oh the ads that you are looking for is not found' }))
          }
        }
      )
    )
  }
}
