import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromAppStateActions from './shared/store/app-state.actions'
import * as fromAppState from './shared/store'
import * as fromAdvertisementActions from './shared-advertisements/data-access/store/advertisements/advertisement.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
    this.errorMessage$ = this.store.select(fromAppState.selectErrorMessage);
    this.hasError$ = this.store.select(fromAppState.selectHasError);
  }
  //TODO: Load data in here
  ngOnInit(): void {
    this.store.dispatch(fromAdvertisementActions.onStartup())
  }
  errorMessage$: Observable<string> | undefined;
  hasError$: Observable<boolean> | undefined;

  onDismissError() {
    this.store.dispatch(fromAppStateActions.onErrorDismissed());
  }
}
