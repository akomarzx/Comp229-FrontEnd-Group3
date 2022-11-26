import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromAdvertisementActions from './shared-advertisements/data-access/store/advertisements/advertisement.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(fromAdvertisementActions.onStartup())
  }

  onDismissError() {
  }
}
