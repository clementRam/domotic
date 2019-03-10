import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from 'src/store/store';
import { TranslatePipe } from './pipes/translate.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [
    Store
  ],
  declarations: [
    NotificationComponent,
    TranslatePipe
  ],
  exports: [
    TranslatePipe,
    NotificationComponent,
    HttpClientModule,
    FontAwesomeModule,
    MatSliderModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
