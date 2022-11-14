import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsPageRoutingModule } from './ads-page-routing.module';
import { AdsPageComponent } from './ads-page.component';

@NgModule({
  declarations: [
    AdsPageComponent
  ],
  imports: [
    CommonModule,
    AdsPageRoutingModule
  ],
  exports: [
    AdsPageComponent
  ]
})
export class AdsPageModule { }
