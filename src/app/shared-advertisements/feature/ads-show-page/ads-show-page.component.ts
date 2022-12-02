import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import dateFormat from 'dateformat';
import { Observable, Subscription, tap } from 'rxjs';
import { selectHasAuthError, selectIsOwner } from 'src/app/auth/data-access/store';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
import { Advertisement } from '../../data-access/models/advertisement.model';
import { selectAllAdvertisement, selectHasApiErrored, selectIsAdvertisementExpired } from '../../data-access/store';
import { selectHasApiError } from '../../data-access/store/advertisements/advertisement.reducer';

@Component({
  selector: 'app-ads-show-page',
  templateUrl: './ads-show-page.component.html',
  styleUrls: ['./ads-show-page.component.css']
})
export class AdsShowPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) {
    this.isCurrentUseTheOwner = this.store.select(selectIsOwner);
    this.hasError$ = this.store.select(selectHasApiErrored)
    this.isAdsExpired$ = this.store.select(selectIsAdvertisementExpired)
  }
  ngOnInit() {
    this.route.data.subscribe(
      ({ advertisement }) => {
        this.selectedAdvert = advertisement
      }
    )
  }
  selectedAdvert!: Advertisement;
  isCurrentUseTheOwner: Observable<boolean> | undefined;

  hasError$: Observable<boolean> | undefined;
  // errorMessage$: Observable<string> | undefined;
  isAdsExpired$: Observable<boolean> | undefined;
}
