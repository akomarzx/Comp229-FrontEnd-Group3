import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectHasError } from 'src/app/shared/store';
import { Advertisement } from '../../data-access/models/advertisement.model';

@Component({
  selector: 'app-ads-create-update-page',
  templateUrl: './ads-create-update-page.component.html',
  styleUrls: ['./ads-create-update-page.component.css']
})
export class AdsCreateUpdatePageComponent implements OnInit {

  constructor(private route : ActivatedRoute, private store : Store) { 
    this.isAdsNotFound$ = this.store.select(selectHasError);
    this.isInEditMode = false;
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      ({advertisement}) => {
        if(advertisement){
          this.advertToUpdate = advertisement;
        }else{
          this.isInEditMode = true;
        }
      }
    )
  }
  isInEditMode : boolean;
  isAdsNotFound$ : Observable<boolean>;
  advertToUpdate : Advertisement | undefined;
}
