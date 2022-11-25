import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Advertisement, AdvertRequiredProps } from '../../data-access/models/advertisement.model';
import * as fromAdvertisementActions from '../../data-access/store/advertisements/advertisement.actions';
import * as fromAdvertisementState from '../../data-access/store'
@Component({
  selector: 'app-ads-create-update-page',
  templateUrl: './ads-create-update-page.component.html',
  styleUrls: ['./ads-create-update-page.component.css']
})
export class AdsCreateUpdatePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {
    this.isAdsNotFound$ = this.store.select(fromAdvertisementState.selectHasApiErrored);
    this.isInEditMode = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({ advertisement }) => {
        if (advertisement) {
          this.advertToUpdate = advertisement;
          this.isInEditMode = true;
        } else {
          this.isInEditMode = false;
        }
      }
    )
    this.route.params.subscribe(params => {
      this.currentIdParams = params['_id'];
    })
  }
  isInEditMode: boolean;
  isAdsNotFound$: Observable<boolean>;
  advertToUpdate: Advertisement | undefined;
  currentIdParams!: string | number;

  // Need selector for the current param
  onFormSubmission(event: Advertisement) {
    //TODO: check whether update or create
    // console.log(event)
    if (this.isInEditMode) {
      const editAds: Update<Advertisement> = {
        id: this.currentIdParams.toString(),
        changes: event
      }
      this.store.dispatch(fromAdvertisementActions.onUpdateAdvertisement({ advertisement: editAds }))
    } else {
      this.store.dispatch(fromAdvertisementActions.onCreateNewAdvertisement({ newAdvert: event }))
    }
  }
}
