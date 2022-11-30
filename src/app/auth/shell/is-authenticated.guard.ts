import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { selectIsAuthenticated } from '../data-access/store';

import * as fromAuthActions from '../../auth/data-access/store/auth.actions'


@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectIsAuthenticated).pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth', 'login']);
          this.store.dispatch(fromAuthActions.onTokenExpiredInRouteGuard());
        }
      }),
      map((isAuthenticated) => isAuthenticated)
    )
  }

}
