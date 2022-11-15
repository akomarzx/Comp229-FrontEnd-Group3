import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from '../models/advertisement.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) { }


  //TODO: Remove Mock 
  getAdvertisements(): Advertisement[] {
    return [
      {
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
    ]
  }
}
