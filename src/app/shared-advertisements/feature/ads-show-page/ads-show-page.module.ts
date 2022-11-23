import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsShowPageRoutingModule } from './ads-show-page-routing.module';
import { AdsShowPageComponent } from './ads-show-page.component';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [
    AdsShowPageComponent
  ],
  imports: [
    CommonModule,
    AdsShowPageRoutingModule
  ],
  exports : [
    AdsShowPageComponent
  ]
})
export class AdsShowPageModule { }
