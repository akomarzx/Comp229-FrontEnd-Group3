import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectHasError } from 'src/app/shared/store';
import { Advertisement, AdvertRequiredProps } from '../../data-access/models/advertisement.model';
import { AdvertisementsService } from '../../data-access/service/advertisements.service';

@Component({
  selector: 'app-ads-create-update-page',
  templateUrl: './ads-create-update-page.component.html',
  styleUrls: ['./ads-create-update-page.component.css']
})
export class AdsCreateUpdatePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, private adsService: AdvertisementsService) {
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
  }
  isInEditMode: boolean;
  isAdsNotFound$: Observable<boolean>;
  advertToUpdate: Advertisement | undefined;

  // Need selector for the current param
  onFormSubmission(event: AdvertRequiredProps) {
    //TODO: check whether update or create
    // console.log(event)
    this.adsService.createAdvertisement(event).subscribe((data) => {
      console.log(data)
    })
  }
}
