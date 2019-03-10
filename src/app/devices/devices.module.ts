import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DevicesComponent,
    DeviceComponent
  ],
  exports: [
    DeviceComponent,
    DevicesComponent
  ]
})
export class DevicesModule { }
