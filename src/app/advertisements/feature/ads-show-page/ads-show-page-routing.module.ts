import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsShowPageComponent } from './ads-show-page.component';
import { AdsShowPageModule } from './ads-show-page.module';

const routes: Routes = [
  {
    path: '',
    component: AdsShowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsShowPageRoutingModule { }
