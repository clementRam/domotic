import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';

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
