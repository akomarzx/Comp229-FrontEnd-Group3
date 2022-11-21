import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from 'src/app/advertisements/data-access/models/advertisement.model';
import { AdvertisementsService } from 'src/app/advertisements/data-access/service/advertisements.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public adsService: AdvertisementsService) {
  }

  ngOnInit(): void {
    this.adsService.getAdvertisements().subscribe(
      (data) => {
        console.log(data)
        this.advertisements = data;
      }
    )
    this.adsService.getAdvertisement('637bfa54f4eb4c15f1d85129').subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  advertisements: Advertisement[] = [];
}
