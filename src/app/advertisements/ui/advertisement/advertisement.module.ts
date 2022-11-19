import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './advertisement.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdvertisementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdvertisementComponent
  ]
})
export class AdvertisementModule { }
