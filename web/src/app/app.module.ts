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

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppConfigService } from './services/app-config.service';

import { GamesModule } from './games/games.module';
import { CategoriesModule } from './categories/categories.module';
import { ClipsModule } from './clips/clips.module';
import { AdminModule } from './admin/admin.module';

import { LocalStorageService } from './local-storage.service';
import { ApiModule } from './api/api.module';

export function init_app(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgBootstrapFormValidationModule.forRoot(),
    AppRoutingModule,
    BlockUIModule.forRoot(),
    StorageServiceModule,
    GamesModule,
    CategoriesModule,
    ClipsModule,
    AdminModule,
    ApiModule
  ],
  providers: [
    LocalStorageService,
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppConfigService], multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [
    BlockUIModule
  ]
})
export class AppModule { }
