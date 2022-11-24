import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBannerComponent } from './error-banner.component';



@NgModule({
  declarations: [
    ErrorBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorBannerComponent
  ]
})
export class ErrorBannerModule { }
