import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule
  ],
  declarations: [
    DashboardViewComponent,
    DevicesComponent, 
    DeviceComponent, 
    SettingsComponent,
  ]
})
export class DashboardModule { }
