import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DevicesModule } from '../devices/devices.module';
import { ScenesModule } from '../scenes/scenes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DevicesModule,
    ScenesModule
  ],
  declarations: [
    DashboardViewComponent,
    SettingsComponent
  ]
})
export class DashboardModule { }
