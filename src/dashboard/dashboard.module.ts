import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardViewComponent, DevicesComponent, DeviceComponent]
})
export class DashboardModule { }
