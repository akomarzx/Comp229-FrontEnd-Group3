import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedAdsNavComponent } from './featured-ads-nav.component';
import { FeatAdsCategoryButtonModule } from '../../ui/feat-ads-category-button/feat-ads-category-button.module';



@NgModule({
  declarations: [
    FeaturedAdsNavComponent
  ],
  imports: [
    CommonModule,
    FeatAdsCategoryButtonModule
  ],
  exports: [
    FeaturedAdsNavComponent
  ]
})
export class FeaturedAdsNavModule { }
