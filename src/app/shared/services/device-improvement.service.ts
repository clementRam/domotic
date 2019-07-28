import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpParams, HttpResponse, HttpClient } from '@angular/common/http';
import { ActionResponse } from '../models/action-response.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationTypes } from 'src/app/shared/models/notification-types.enum';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Devices } from '../models/devices.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceImprovementService {

  constructor(private notificationService: NotificationService, private http: HttpClient) { }

  public addMethodsToDevice(device: Device, devices$: Observable<Devices>): Device {
    if(this.isSwitchType(device))
          this.addSwitchStateMethod(device, devices$);

    this.addUpdateNameMethod(device, devices$);
    this.addDescriptionMethod(device, devices$);

    return device;
  }

  private isSwitchType(device: Device): boolean {
    return device.SwitchType === "On/Off" || device.SwitchType === "Dimmer";
  }

  private addSwitchStateMethod(device: Device, devices$: Observable<Devices>): void {
    device.switchState = () => {
      const params = new HttpParams()
      .set('type', 'command')
      .append('param', 'switchlight')
      .append('idx', device.idx)
      .append('switchcmd', 'Toggle')
  
      return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
      .pipe(map((response: HttpResponse<ActionResponse>) => {
        if(response.body.status === 'OK') {
          devices$.subscribe();
          // this.getDevices().subscribe();
        } else {
          this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, NotificationTypes.Danger);
        }
        return response.body;
      }));
    }
  }

  private addUpdateNameMethod(device: Device, devices$: Observable<Devices>): void {
    device.updateName = (name: string) => {
      const params = new HttpParams()
        .set('type', 'setused')
        .append('idx', device.idx)
        .append('name', name)
        .append('description', device.Description)
        .append('used', 'true');

    return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
    .pipe(map((response: HttpResponse<ActionResponse>) => {
      if(response.body.status === 'OK') {
        devices$.subscribe();
      } else {
        this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, NotificationTypes.Danger);
      }
      return response.body;
    }));
    }
  }

  private addDescriptionMethod(device: Device, devices$: Observable<Devices>): void {
    device.updateDescription = (description: string) => {
      const params = new HttpParams()
      .set('description', description)
      .append('idx', device.idx)
      .append('name', device.Name)
      .append('type', 'setused')
      .append('used', 'true');
    
    return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
    .pipe(map((response: HttpResponse<ActionResponse>) => {
      if(response.body.status === 'OK') {
        devices$.subscribe();
      } else {
        this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, NotificationTypes.Danger);
      }
      return response.body;
    })) 
    }
  }
}
