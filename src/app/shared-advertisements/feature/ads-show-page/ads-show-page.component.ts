import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
import { Advertisement } from '../../data-access/models/advertisement.model';
import { selectAllAdvertisement } from '../../data-access/store';

@Component({
  selector: 'app-ads-show-page',
  templateUrl: './ads-show-page.component.html',
  styleUrls: ['./ads-show-page.component.css']
})
export class AdsShowPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) {
    this.advertisements$ = this.store.select(selectAllAdvertisement);
  }
  ngOnInit() {
    this.route.data.subscribe(
      ({advertisement}) => {
        this.selectedAdvert = advertisement
      }
    )
  }
  selectedAdvert!: Advertisement;

  advertisements$ : Observable<Advertisement[]>;
}
