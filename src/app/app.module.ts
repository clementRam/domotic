import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from "./../http-interceptor";

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes/routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AutomatisationModule } from './automatisation/automatisation.module';
import { HomeModule } from './home/home.module';
import { DevicesModule } from './devices/devices.module';
import { ScenesModule } from './scenes/scenes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    DashboardModule,
    AutomatisationModule,
    HomeModule,
    DevicesModule,
    ScenesModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
