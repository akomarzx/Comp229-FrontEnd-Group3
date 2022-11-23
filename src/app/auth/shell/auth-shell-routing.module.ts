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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthShellRoutingModule { }
