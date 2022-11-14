import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FeaturedAdsNavModule } from '../../ui/featured-ads-nav/featured-ads-nav.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FeaturedAdsNavModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
