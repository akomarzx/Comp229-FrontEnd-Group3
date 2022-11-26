import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Advertisement } from '../../data-access/models/advertisement.model';
import { selectAllAdvertisement } from '../../data-access/store';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.css']
})
export class AdsPageComponent implements OnInit {

  constructor(private store: Store) {
    this.advertisement$ = this.store.select(selectAllAdvertisement);
  }

  ngOnInit(): void {
  }

  advertisement$: Observable<Advertisement[]> | undefined;
}
