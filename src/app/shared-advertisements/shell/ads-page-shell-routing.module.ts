import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from 'src/app/auth/shell/is-authenticated.guard';
import { AdvertisementResolver } from './advertisement.resolver';
import { IsStoreFullyLoadedGuard } from './is-store-fully-loaded.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../feature/ads-page/ads-page.module').then(m => m.AdsPageModule)
  },
  {
    path: 'create-ad',
    loadChildren: () =>
      import('../feature/ads-create-update-page/ads-create-update-page.module').then(m => m.AdsCreateUpdatePageModule),
      canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'edit/:_id',
    loadChildren: () =>
      import('../feature/ads-create-update-page/ads-create-update-page.module').then(m => m.AdsCreateUpdatePageModule),
    canActivate: [IsStoreFullyLoadedGuard, IsAuthenticatedGuard],
    resolve: {
      advertisement: AdvertisementResolver
    }
  },
  {
    path: ':_id',
    loadChildren: () => import('../feature/ads-show-page/ads-show-page.module').then(m => m.AdsShowPageModule),
    canActivate : [IsStoreFullyLoadedGuard],
    resolve: {
      advertisement: AdvertisementResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsPageShellRoutingModule { }
