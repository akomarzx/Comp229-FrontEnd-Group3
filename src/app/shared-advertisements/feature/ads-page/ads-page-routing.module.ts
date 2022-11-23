import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsPageComponent } from './ads-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsPageRoutingModule { }
