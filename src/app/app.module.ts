import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { NavbarModule } from './core/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromAdvertisementsState from './advertisements/data-access/store'
import * as fromAppState from './shared/store'
import { AdvertisementApiEffects } from './advertisements/data-access/store/advertisements/advertisement.effects';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('router', routerReducer),
    StoreModule.forFeature(fromAppState.FeatureKey, fromAppState.reducers),
    StoreModule.forFeature(fromAdvertisementsState.FeatureKey, fromAdvertisementsState.reducers),
    EffectsModule.forRoot([AdvertisementApiEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
