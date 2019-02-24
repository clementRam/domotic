import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from "./../http-interceptor";

import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes/routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    DashboardModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
