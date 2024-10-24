import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, filter, map, Observable, of, skipWhile, take } from 'rxjs';
import * as FromAdvertisementState from '../data-access/store';
import * as FromAdvetisementActions from '../data-access/store/advertisements/advertisement.actions'
@Injectable({
  providedIn: 'root'
})
export class IsStoreFullyLoadedGuard  {

  constructor(private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(FromAdvertisementState.selectIsApiLoading).pipe(
      filter(loaded => !!loaded),
      take(1)
    )
  }
}
