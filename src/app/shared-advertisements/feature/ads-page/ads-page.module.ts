import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsPageRoutingModule } from './ads-page-routing.module';
import { AdsPageComponent } from './ads-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdvertisement from '../../data-access/store';
import { EffectsModule } from '@ngrx/effects';
import { AdvertisementApiEffects } from '../../data-access/store/advertisements/advertisement.effects';

@NgModule({
  declarations: [
    AdsPageComponent
  ],
  imports: [
    CommonModule,
    AdsPageRoutingModule,
  ],
  exports: [
    AdsPageComponent
  ]
})
export class AdsPageModule { }