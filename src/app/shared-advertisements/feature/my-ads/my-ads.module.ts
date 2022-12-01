import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdsRoutingModule } from './my-ads-routing.module';
import { AdvertisementsListModule } from '../../ui/advertisements-list/advertisements-list.module';
import { AdvertisementModule } from '../../ui/advertisement/advertisement.module';
import { SpinnerModule } from 'src/app/shared/ui/spinner/spinner.module';
import { MyAdsComponent } from './my-ads.component';


@NgModule({
  declarations: [
    MyAdsComponent
  ],
  imports: [
    CommonModule,
    MyAdsRoutingModule,
    AdvertisementsListModule,
    AdvertisementModule,
    SpinnerModule
  ]
})
export class MyAdsModule { }
