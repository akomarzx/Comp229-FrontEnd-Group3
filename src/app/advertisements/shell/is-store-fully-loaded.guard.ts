import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, map, Observable } from 'rxjs';
import * as FromAdvertisementState from '../data-access/store';
import * as FromAdvetisementActions from '../data-access/store/advertisements/advertisement.actions'
@Injectable({
  providedIn: 'root'
})
export class IsStoreFullyLoadedGuard implements CanActivate {

  constructor(private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(FromAdvertisementState.selectIsApiLoading).pipe(
      delay(3000),
      map((data) => data)
    )
  }
}
