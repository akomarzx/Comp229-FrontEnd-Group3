import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsStoreFullyLoadedGuard } from 'src/app/shared-advertisements/shell/is-store-fully-loaded.guard';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../features/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../features/signup-page/signup-page.module').then(m => m.SignupPageModule)
  },
  {
    path: 'user/profile',
    loadChildren: () => import('../features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [IsStoreFullyLoadedGuard, IsAuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthShellRoutingModule { }
