import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './container/home-view/home-view.component';
import { DevicesModule } from '../devices/devices.module';

@NgModule({
  imports: [
    CommonModule,
    DevicesModule
  ],
  declarations: [
    HomeViewComponent
  ]
})
export class HomeModule { }
