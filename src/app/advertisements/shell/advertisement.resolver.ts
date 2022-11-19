import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { Advertisement } from '../data-access/models/advertisement.model';
import { selectAdvertisement } from '../data-access/store';

@Injectable({
  providedIn: 'root'
})
// will use this resolver to make sure that
// params is present in the collection when editing or showing a single ad
export class AdvertisementResolver implements Resolve<Advertisement | undefined> {
  constructor(private store: Store) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Advertisement | undefined> {
    return this.store.select(selectAdvertisement);
  }
}
