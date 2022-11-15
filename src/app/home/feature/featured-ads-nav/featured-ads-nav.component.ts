import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFeaturedAdsCatActions from '../../data-access/store/featured-ads-nav/featured-ads-nav.actions'
import * as fromFeaturedAdsCatState from '../../data-access/store/';
@Component({
  selector: 'app-featured-ads-nav',
  templateUrl: './featured-ads-nav.component.html',
  styleUrls: ['./featured-ads-nav.component.css']
})
export class FeaturedAdsNavComponent {

  constructor(private store: Store) {
    this.isFeatCarActive$ = store.select(fromFeaturedAdsCatState.selectIsCarSelected);
    this.isFeatElectroActive$ = store.select(fromFeaturedAdsCatState.selectIsElectroSelected);
    this.isFeatFashActive$ = store.select(fromFeaturedAdsCatState.selectIsFashionSelected);
    this.isFeatSportsActive$ = store.select(fromFeaturedAdsCatState.selectIsSportsSelected);
    this.isFeatOtherActive$ = store.select(fromFeaturedAdsCatState.selectIsOtherSelected);
    this.isFeatAllActive = store.select(fromFeaturedAdsCatState.selectIsAllSelected);
  }
  loadFeatAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedAllCategory());
  }
  loadFeatCarAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedCarsCategory())
  }
  loadFeatElectrAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedElectroCategory())
  }
  loadFeatFashAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedFashionCategory())
  }
  loadFeatSportAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedSportsCategory())
  }
  loadFeatOtherAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedOtherCategory());
  }

  isFeatAllActive : Observable<boolean>;
  isFeatCarActive$: Observable<boolean>;
  isFeatElectroActive$: Observable<boolean>;
  isFeatFashActive$: Observable<boolean>;
  isFeatSportsActive$: Observable<boolean>;
  isFeatOtherActive$: Observable<boolean>;
}
