import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Advertisement } from '../models/advertisement.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) { }


  //TODO: Remove Mock 
  getAdvertisements(): Observable<Advertisement[]> {
    return of([
      {
        _id: '1',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '2',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '3',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '4',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '5',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '6',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '7',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id: '8',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      },
      {
        _id : '9',
        item: 'hello world',
        status: 'new',
        dateCreated: new Date(),
        description: {
          title: 'test',
          description: 'this is a test description',
          category: 'this a test',
          condition: 'this is a test',
          price: 3342
        }
      }
    ])
  }
}
