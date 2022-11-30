import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectToken, selectIsAuthenticated } from '../data-access/store';
import * as fromAuthAction from '../../auth/data-access/store/auth.actions'
import { Router } from '@angular/router';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token$: Observable<string>
  isAuthenticated$: Observable<boolean>;
  isAuthenticated: boolean | undefined

  constructor(private store: Store, private router: Router) {
    // TODO: Check if user is logged in first
    this.token$ = this.store.select(selectToken)
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated)
    this.isAuthenticated$.subscribe(
      (isAuth) => {
        this.isAuthenticated = isAuth;
        if (!isAuth) {
          this.store.dispatch(fromAuthAction.onTokenExpiredInInterceptor());
        }
      }
    )
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token$.subscribe(
      (token) => {
        if (token && this.isAuthenticated) {
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          })
        }
      }
    )
    return next.handle(request);
  }
}
