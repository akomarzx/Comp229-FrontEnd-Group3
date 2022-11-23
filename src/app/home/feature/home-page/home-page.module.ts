import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FeaturedAdsNavModule } from '../featured-ads-nav/featured-ads-nav.module';
import { StoreModule } from '@ngrx/store';
import * as from from '../../data-access/store';
import { AdvertisementsListModule } from 'src/app/shared-advertisements/ui/advertisements-list/advertisements-list.module';
import { SpinnerModule } from 'src/app/shared/ui/spinner/spinner.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FeaturedAdsNavModule,
    AdvertisementsListModule,
    SpinnerModule,
    StoreModule.forFeature(from.FeatureKey, from.reducers, { metaReducers: from.metaReducers }),
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
