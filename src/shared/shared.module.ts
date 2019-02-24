import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from 'src/store/store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    Store
  ],
  declarations: [NotificationComponent],
  exports: [
    NotificationComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
