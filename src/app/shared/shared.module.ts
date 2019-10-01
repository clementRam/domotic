import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Store } from 'src/app/shared/store/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NotificationComponent } from './components/notification/notification.component';
import { SceneComponent } from './components/scenes/components/scene/scene.component';
import { ScenesComponent } from './components/scenes/components/scenes/scenes.component';
import { DeviceComponent } from './components/devices/components/device/device.component';
import { DevicesComponent } from './components/devices/components/devices/devices.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [
    Store
  ],
  declarations: [
    NotificationComponent,
    NavbarComponent,
    DeviceComponent,
    DevicesComponent,
    SceneComponent,
    ScenesComponent
  ],
  exports: [
    NotificationComponent,
    NavbarComponent,
    HttpClientModule,
    FontAwesomeModule,
    MatSliderModule,
    BrowserAnimationsModule,
    DeviceComponent,
    DevicesComponent,
    SceneComponent,
    ScenesComponent
  ]
})
export class SharedModule { }
