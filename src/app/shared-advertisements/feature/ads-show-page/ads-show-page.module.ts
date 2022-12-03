import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsShowPageRoutingModule } from './ads-show-page-routing.module';
import { AdsShowPageComponent } from './ads-show-page.component';
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdsShowPageComponent
  ],
  imports: [
    CommonModule,
    AdsShowPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AdsShowPageComponent
  ]
})
export class AdsShowPageModule { }
