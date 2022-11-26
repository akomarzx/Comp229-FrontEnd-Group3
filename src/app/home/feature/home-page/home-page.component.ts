import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Advertisement } from 'src/app/shared-advertisements/data-access/models/advertisement.model';
import * as fromAdvertisement from '../../../shared-advertisements/data-access/store'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store) {
    this.isApiLoading$ = this.store.select(fromAdvertisement.selectIsApiLoading)
  }

  ngOnInit(): void {
  }

  onSelectCarAds() {
    this.advertisements$ = this.store.select(fromAdvertisement.selectFeaturedCarsAds)
  }
  onSelectElectronicsAds() {
    this.advertisements$ = this.store.select(fromAdvertisement.selectGadgetAds)
  }
  onSelectFashionAds() {
    this.advertisements$ = this.store.select(fromAdvertisement.selectFeaturedFashionAds);
  }
  onSelectSportsAds() {
    this.advertisements$ = this.store.select(fromAdvertisement.selectSportsAds);
  }
  onSelectOthersAds() {
    this.advertisements$ = this.store.select(fromAdvertisement.selectOtherAds);
  }
  isApiLoading$: Observable<boolean> | undefined;
  advertisements$: Observable<Advertisement[]> | undefined;
}
