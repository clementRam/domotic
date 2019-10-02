import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardViewComponent,
    SettingsComponent
  ],
  exports: [
    DashboardViewComponent
  ]
})
export class DashboardModule { }
