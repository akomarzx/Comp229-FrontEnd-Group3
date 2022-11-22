import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { ActivatedRoute } from '@angular/router';
import { Store, UPDATE } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectHasError } from 'src/app/shared/store';
import { Advertisement, AdvertRequiredProps } from '../../data-access/models/advertisement.model';
import * as fromAdvertisementActions from '../../data-access/store/advertisements/advertisement.actions';
@Component({
  selector: 'app-ads-create-update-page',
  templateUrl: './ads-create-update-page.component.html',
  styleUrls: ['./ads-create-update-page.component.css']
})
export class AdsCreateUpdatePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store) {
    this.isAdsNotFound$ = this.store.select(selectHasError);
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
  currentIdParams!: string;

  // Need selector for the current param
  onFormSubmission(event: AdvertRequiredProps) {
    //TODO: check whether update or create
    // console.log(event)
    if (this.isInEditMode) {
      this.store.dispatch(fromAdvertisementActions.onUpdateAdvertisement({ id: this.currentIdParams, advertChange: event as unknown as Update<AdvertRequiredProps> }))
    } else {
      this.store.dispatch(fromAdvertisementActions.onCreateNewAdvertisement({ newAdvert: event }))
    }
  }
}
