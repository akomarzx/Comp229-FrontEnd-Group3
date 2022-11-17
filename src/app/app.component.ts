import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdvertisementsService } from './advertisements/data-access/service/advertisements.service';
import * as fromAdvertisementActions from './advertisements/data-access/store/advertisement.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private adsService : AdvertisementsService, private store : Store ) {
  } 
  ngOnInit(): void {
    this.adsService.getAdvertisements().subscribe(
      (data) => {
        this.store.dispatch(fromAdvertisementActions.loadAdvertisements({advertisements : data}));
      }
    )
  }
  title = 'Comp229-FrontEnd-Group3';
}
