import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Advertisement } from '../../data-access/models/advertisement.model';
import * as fromAuthState from '../../../auth/data-access/store'
@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  constructor(private store: Store) {
    this.myAds$ = this.store.select(fromAuthState.selectAdsOwnedByUser)
  }

  ngOnInit(): void {
  }

  myAds$: Observable<Advertisement[]> | undefined;
}
