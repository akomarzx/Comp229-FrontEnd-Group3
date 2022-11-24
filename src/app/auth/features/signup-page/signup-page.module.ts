import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupPageRoutingModule } from './signup-page-routing.module';
import { SignupPageComponent } from './signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    SignupPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupPageComponent
  ]
})
export class SignupPageModule { }
