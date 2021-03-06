import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../models/notification.model';
import { NotificationTypes } from '../models/notification-types.enum';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  public notification: Notification;
  public notificationSubject = new Subject<Notification>();

  constructor() { }

  sendNotificationTemp(message: string, type: NotificationTypes) {
    this.notification = new Notification(message, type);
    this.emitNotificationSubject();
    setTimeout(() => {
      this.notification.displayed = false;
    }, 4000);
  }

  emitNotificationSubject() {
    this.notificationSubject.next(this.notification);
  }
}
