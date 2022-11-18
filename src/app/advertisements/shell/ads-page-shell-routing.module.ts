import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../feature/ads-page/ads-page.module').then(m => m.AdsPageModule)
  },
  {
    path: 'create-ad',
    loadChildren: () =>
      import('../feature/ads-create-update-page/ads-create-update-page.module').then(m => m.AdsCreateUpdatePageModule)
  },
  {
    path: 'edit/:_id',
    loadChildren: () =>
      import('../feature/ads-create-update-page/ads-create-update-page.module').then(m => m.AdsCreateUpdatePageModule)
  },
  {
    path: ':_id',
    loadChildren: () => import('../feature/ads-show-page/ads-show-page.module').then(m => m.AdsShowPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsPageShellRoutingModule { }
