import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
import { Advertisement } from '../../data-access/models/advertisement.model';
import { selectAdvertisement } from '../../data-access/store';

@Component({
  selector: 'app-ads-show-page',
  templateUrl: './ads-show-page.component.html',
  styleUrls: ['./ads-show-page.component.css']
})
export class AdsShowPageComponent implements OnInit, OnDestroy {

  constructor(private store: Store, private router: Router) {
    this.advertisement$ = store.select(selectAdvertisement)
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  advertisement$: Observable<Advertisement | undefined>;
}
