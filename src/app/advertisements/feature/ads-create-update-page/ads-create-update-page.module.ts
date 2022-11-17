import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsCreateUpdatePageRoutingModule } from './ads-create-update-page-routing.module';
import { AdsCreateUpdatePageComponent } from './ads-create-update-page.component';


@NgModule({
  declarations: [
    AdsCreateUpdatePageComponent
  ],
  imports: [
    CommonModule,
    AdsCreateUpdatePageRoutingModule
  ]
})
export class AdsCreateUpdatePageModule { }
