import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdvertisementsService } from './advertisements/data-access/service/advertisements.service';
import * as fromAdvertisementActions from './advertisements/data-access/store/advertisements/advertisement.actions'
import * as fromAppStateActions from './shared/store/app-state.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private adsService: AdvertisementsService, private store: Store) {
  }
  ngOnInit(): void {
    this.adsService.getAdvertisements().subscribe(
      (data) => {
        this.store.dispatch(fromAdvertisementActions.loadAdvertisements({ advertisements: data }));
      }
    )
  }
  errorMessage$: Observable<string> | undefined;
  hasError: Observable<boolean> | undefined;

  onDismissError() {
    this.store.dispatch(fromAppStateActions.onErrorDismissed());
  }
}
