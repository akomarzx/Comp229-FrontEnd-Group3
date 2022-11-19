import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsCreateUpdateFormComponent } from './ads-create-update-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdsCreateUpdateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdsCreateUpdateFormComponent
  ]
})
export class AdsCreateUpdateFormModule { }
