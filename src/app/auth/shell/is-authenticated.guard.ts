import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { selectIsAuthenticated } from '../data-access/store';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private store: Store, private router : Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectIsAuthenticated).pipe(
        tap((isAuthenticatd) => {
          if(!isAuthenticatd)
            this.router.navigate(['/auth', 'login'])
        }),
        map((isAuthenticated) => isAuthenticated)
      )
  }

}
