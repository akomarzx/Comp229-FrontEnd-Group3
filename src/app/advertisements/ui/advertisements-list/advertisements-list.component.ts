import { Component, Input, OnInit } from '@angular/core';
import { Advertisement } from '../../data-access/models/advertisement.model';

@Component({
  selector: 'app-advertisements-list',
  templateUrl: './advertisements-list.component.html',
  styleUrls: ['./advertisements-list.component.css']
})
export class AdvertisementsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() advertisments: Advertisement[] = [];
}
