import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFeaturedAdsCatActions from '../../data-access/store/featured-ads-nav/featured-ads-nav.actions'
import * as fromFeaturedAdsCatState from '../../data-access/store/';
@Component({
  selector: 'app-featured-ads-nav',
  templateUrl: './featured-ads-nav.component.html',
  styleUrls: ['./featured-ads-nav.component.css']
})
export class FeaturedAdsNavComponent implements OnInit {

  constructor(private store: Store) {
    this.isFeatCarActive$ = store.select(fromFeaturedAdsCatState.selectIsCarSelected);
    this.isFeatElectroActive$ = store.select(fromFeaturedAdsCatState.selectIsElectroSelected);
    this.isFeatFashActive$ = store.select(fromFeaturedAdsCatState.selectIsFashionSelected);
    this.isFeatSportsActive$ = store.select(fromFeaturedAdsCatState.selectIsSportsSelected);
    this.isFeatOtherActive$ = store.select(fromFeaturedAdsCatState.selectIsOtherSelected);
  }
  ngOnInit(): void {
    this.featCarSelected.emit();
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedCarsCategory())
  }
  loadFeatCarAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedCarsCategory())
    this.featCarSelected.emit()
  }
  loadFeatElectrAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedElectroCategory())
    this.featElectronicsSelected.emit()
  }
  loadFeatFashAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedFashionCategory())
    this.featFashionSelected.emit()
  }
  loadFeatSportAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedSportsCategory());
    this.featSportsSelected.emit()
  }
  loadFeatOtherAdverts() {
    this.store.dispatch(fromFeaturedAdsCatActions.onClickedOtherCategory());
    this.featOthersSelected.emit();
  }

  isFeatCarActive$: Observable<boolean>;
  isFeatElectroActive$: Observable<boolean>;
  isFeatFashActive$: Observable<boolean>;
  isFeatSportsActive$: Observable<boolean>;
  isFeatOtherActive$: Observable<boolean>;

  @Output() featCarSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() featFashionSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() featElectronicsSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() featSportsSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() featOthersSelected: EventEmitter<void> = new EventEmitter<void>()
}
