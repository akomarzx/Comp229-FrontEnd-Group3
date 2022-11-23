import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsCreateUpdatePageComponent } from './ads-create-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdsCreateUpdatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsCreateUpdatePageRoutingModule { }
