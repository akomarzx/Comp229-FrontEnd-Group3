import { Component, Input, OnInit } from '@angular/core';
import { Advertisement } from '../../data-access/models/advertisement.model';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() advertisement! : Advertisement;
}
