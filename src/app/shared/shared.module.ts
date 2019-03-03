import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { Store } from 'src/store/store';
import { TranslatePipe } from './pipes/translate.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
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
    FontAwesomeModule
  ]
})
export class SharedModule { }
