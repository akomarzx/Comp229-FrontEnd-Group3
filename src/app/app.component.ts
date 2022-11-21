import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AdvertisementsService } from './advertisements/data-access/service/advertisements.service';
import * as fromAdvertisementActions from './advertisements/data-access/store/advertisements/advertisement.actions'
import * as fromAppStateActions from './shared/store/app-state.actions'
import * as fromAppState from './shared/store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private adsService: AdvertisementsService, private store: Store) {
    this.errorMessage$ = this.store.select(fromAppState.selectErrorMessage);
    this.hasError$ = this.store.select(fromAppState.selectHasError);
  }
  //TODO: Load data in here
  ngOnInit(): void {

  }
  errorMessage$: Observable<string> | undefined;
  hasError$: Observable<boolean> | undefined;

  onDismissError() {
    this.store.dispatch(fromAppStateActions.onErrorDismissed());
  }
}
