import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from "./../http-interceptor";

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { AutomatisationModule } from './automatisation/automatisation.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DashboardModule,
    AutomatisationModule,
    HomeModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
