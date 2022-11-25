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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromAdvertisementsState from './shared-advertisements/data-access/store'
import * as fromAuthState from './auth/data-access/store'
import { AdvertisementApiEffects } from './shared-advertisements/data-access/store/advertisements/advertisement.effects';
import { AuthEffects } from './auth/data-access/store/auth.effects';
import { JWTInterceptor } from './auth/shell/JWTauth.interceptor';
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
    StoreModule.forFeature(fromAuthState.authFeatureKey, fromAuthState.reducers),
    StoreModule.forFeature(fromAdvertisementsState.FeatureKey, fromAdvertisementsState.reducers),
    EffectsModule.forRoot([AdvertisementApiEffects, AuthEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
