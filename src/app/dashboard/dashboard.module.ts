import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardViewComponent,
    SettingsComponent
  ]
})
export class DashboardModule { }
