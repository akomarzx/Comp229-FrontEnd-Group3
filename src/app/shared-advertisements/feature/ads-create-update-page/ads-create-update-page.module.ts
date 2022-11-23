import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsCreateUpdatePageRoutingModule } from './ads-create-update-page-routing.module';
import { AdsCreateUpdatePageComponent } from './ads-create-update-page.component';
import { AdsCreateUpdateFormComponent } from '../../ui/ads-create-update-form/ads-create-update-form.component';
import { AdsCreateUpdateFormModule } from '../../ui/ads-create-update-form/ads-create-update-form.module';


@NgModule({
  declarations: [
    AdsCreateUpdatePageComponent
  ],
  imports: [
    CommonModule,
    AdsCreateUpdatePageRoutingModule,
    AdsCreateUpdateFormModule
  ]
})
export class AdsCreateUpdatePageModule { }
