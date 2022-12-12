import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable, of } from 'rxjs';
import { Advertisement, AdvertRequiredProps } from '../models/advertisement.model';
import { AdsApiResponseModel } from '../models/response.model';

//TODO: chjange the url onm deployement
const BASE_URL = 'https://chafanarosa--cbs--backend.herokuapp.com/api/';
// const BASE_URL = 'http://localhost:3000/api/';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) { }

  getAdvertisements(): Observable<AdsApiResponseModel> {
    return this.httpClient.get<AdsApiResponseModel>(BASE_URL + 'advertisements')
  }

  getAdvertisement(id: string): Observable<AdsApiResponseModel> {
    return this.httpClient.get<AdsApiResponseModel>(BASE_URL + 'advertisements/' + id);
  }

  createAdvertisement(newAdvertisement: AdvertRequiredProps): Observable<AdsApiResponseModel> {
    return this.httpClient.post<AdsApiResponseModel>(BASE_URL + 'advertisements', newAdvertisement, HEADER);
  }

  updateAdvertisement(advert: Update<Advertisement>): Observable<AdsApiResponseModel> {
    return this.httpClient.patch<AdsApiResponseModel>(BASE_URL + 'advertisements/' + advert.id, advert.changes, HEADER);
  }

  addNewQuestion(advert: Update<Advertisement>): Observable<AdsApiResponseModel> {
    return this.httpClient.patch<AdsApiResponseModel>(BASE_URL + 'advertisements/' + advert.id + '/inquiry', advert.changes);
  }
}

