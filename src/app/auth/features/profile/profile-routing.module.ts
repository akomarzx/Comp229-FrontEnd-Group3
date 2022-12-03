import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'advertisements',
        loadChildren: () => import('../../../shared-advertisements/feature/my-ads/my-ads.module').then(m => m.MyAdsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
