import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsPageRoutingModule } from './ads-page-routing.module';


@NgModule({
  declarations: [
    AdsPageModule
  ],
  imports: [
    CommonModule,
    AdsPageRoutingModule
  ],
  exports: [
    AdsPageModule
  ]
})
export class AdsPageModule { }
