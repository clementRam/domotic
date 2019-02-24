import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notification: Notification;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.notificationSubject.subscribe(
      notification => this.notification = notification
    );
  }
}
