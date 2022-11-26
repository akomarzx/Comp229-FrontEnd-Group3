import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromAdvertisementActions from './shared-advertisements/data-access/store/advertisements/advertisement.actions'
import * as fromAuthActions from './auth/data-access/store/auth.actions'
import * as fromAdvertisementState from './shared-advertisements/data-access/store';
import * as fromAuthState from './auth/data-access/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
    this.hasAuthError$ = this.store.select(fromAuthState.selectHasAuthError);
    this.authErrorMessage$ = this.store.select(fromAuthState.selectAuthErrorMessage);
    this.hasAdvertisementError$ = store.select(fromAdvertisementState.selectHasApiErrored);
    this.advertisementErrorMessage$ = store.select(fromAdvertisementState.selectErrorMessage);
  }
  ngOnInit(): void {
    this.store.dispatch(fromAdvertisementActions.onStartup())
  }

  onDismissError() {
    this.store.dispatch(fromAuthActions.onAuthErrorDismissed())
  }

  // hasAdvertisementApiError$: Observable<boolean>;
  // advertisementErrorMessage$: Observable<string>;

  hasAuthError$: Observable<boolean>;
  authErrorMessage$: Observable<string>;
  hasAdvertisementError$: Observable<boolean>;
  advertisementErrorMessage$: Observable<string>;
}
