import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable, of } from 'rxjs';
import { Advertisement, AdvertRequiredProps } from '../models/advertisement.model';

//TODO: chjange the url onm deployement
const BASE_URL = 'http://localhost:3000/api/';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) { }

  getAdvertisements(): Observable<Advertisement[]> {
    return this.httpClient.get<Advertisement[]>(BASE_URL + 'advertisements')
  }

  getAdvertisement(id: string): Observable<Advertisement> {
    return this.httpClient.get<Advertisement>(BASE_URL + 'advertisements/' + id);
  }

  createAdvertisement(newAdvertisement: AdvertRequiredProps): Observable<Advertisement> {
    return this.httpClient.post<Advertisement>(BASE_URL + 'advertisements', newAdvertisement, HEADER);
  }

  updateAdvertisement(advert : Update<Advertisement>): Observable<Advertisement> {
    return this.httpClient.patch<Advertisement>(BASE_URL + 'advertisements/' +  advert.id, advert.changes, HEADER);
  }
}
