import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BlockUIModule } from 'ng-block-ui';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { GamesModule } from './games/games.module';
import { CategoriesModule } from './categories/categories.module';
import { AdminModule } from './admin/admin.module';

import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgBootstrapFormValidationModule.forRoot(),
    AppRoutingModule,
    BlockUIModule.forRoot(),
    StorageServiceModule,
    GamesModule,
    CategoriesModule,
    AdminModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent],
  exports: [
    BlockUIModule
  ]
})
export class AppModule { }
