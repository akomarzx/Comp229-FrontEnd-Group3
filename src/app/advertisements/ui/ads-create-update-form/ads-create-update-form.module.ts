import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsCreateUpdateFormComponent } from './ads-create-update-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdsCreateUpdateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdsCreateUpdateFormComponent
  ]
})
export class AdsCreateUpdateFormModule { }
