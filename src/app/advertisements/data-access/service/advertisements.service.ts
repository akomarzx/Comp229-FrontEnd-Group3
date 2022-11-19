import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Advertisement } from '../models/advertisement.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) { }


  addSevenDays() {
    const date = new Date();
    return date.setDate(date.getDate() + 7).toString();
  }

  //TODO: Remove Mock
  getAdvertisements(): Observable<Advertisement[]> {
    return of([
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
     {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
     {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
      {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      },
     {
        _id: '1',
        adsTitle: 'hello world',
        price: 333,
        status: 'new',
        // TODO: mkjae sure that backend will return the timestamp
        // Use a pipe to format the date in the template

        activeDate: new Date().getDate().toString(),
        expiryDate: this.addSevenDays(),
        description: {
          itemName: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
        }
      }
    ])
  }
}
