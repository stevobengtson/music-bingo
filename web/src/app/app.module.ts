import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BlockUIModule } from 'ng-block-ui';
import { AngularTokenModule } from 'angular-token';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { GamesModule } from './games/games.module';
import { CategoriesModule } from './categories/categories.module';
import { ClipsModule } from './clips/clips.module';
import { AdminModule } from './admin/admin.module';
import { ApiModule } from './api/api.module';
import { SharedModule } from './shared/shared.module';

import { AppConfigService } from './services/app-config.service';
import { LocalStorageService } from './services/local-storage.service';
import { ToastsComponent } from './toasts/toasts.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

export function init_app(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToastsComponent,
    TitleBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    NgBootstrapFormValidationModule.forRoot(),
    AppRoutingModule,
    BlockUIModule.forRoot(),
    AngularTokenModule.forRoot({
      apiBase: 'http://192.168.86.51:3000',
    }),
    StorageServiceModule,
    GamesModule,
    CategoriesModule,
    ClipsModule,
    AdminModule,
    ApiModule,
    SharedModule
  ],
  providers: [
    LocalStorageService,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [BlockUIModule],
})
export class AppModule { }
