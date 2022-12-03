import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '/profile',
    loadChildren: () => import('../features/profile/profile.module').then(m => m.ProfileModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthShellRoutingModule { }
