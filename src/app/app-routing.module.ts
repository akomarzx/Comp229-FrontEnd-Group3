import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/feature/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'advertisements', 
    loadChildren: () => import('./shared-advertisements/shell/ads-page-shell.module').then(m => m.AdsPageShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
