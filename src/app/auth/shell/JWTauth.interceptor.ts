import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectToken } from '../data-access/store';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token$: Observable<string>
  constructor(private store: Store) {
    // TODO: Check if user is logged in first
    this.token$ = this.store.select(selectToken)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token$.subscribe(
      (token) => {
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          })
        }
      }
    )
    return next.handle(request);
  }
}
