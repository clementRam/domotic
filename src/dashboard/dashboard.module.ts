import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule
  ],
  declarations: [DashboardViewComponent, DevicesComponent, DeviceComponent]
})
export class DashboardModule { }
