import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from 'src/store/store';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
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
    HttpClientModule
  ]
})
export class SharedModule { }
