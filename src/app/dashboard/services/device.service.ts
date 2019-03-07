import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';
import { DefaultStoreDataNames, Store } from 'src/store/store';
import { map } from 'rxjs/operators';
import { ActionResponse } from '../models/actionResponse.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor(private http: HttpClient, private store: Store, private notificationService: NotificationService) { }

  public getDevices(): Observable<Devices> {
    const params = new HttpParams()
    .set('type', 'devices')
    .append('favorite', '1')
    .append('filter', 'all')
    .append('used', 'true');

    return this.http.get<Devices>(environment.apiUrl, {
      params: params
    }).pipe(map(devices => {
      this.store.set(DefaultStoreDataNames.DEVICES, devices.result)
      return devices;
    })
    ) as Observable<Devices>
  }

  public getDevice(idx: string): Observable<Device> {
    const params = new HttpParams()
    .set('rid', idx)
    .append('type', 'devices');

    return this.http.get<Device>(environment.apiUrl, {params: params});
  }

  public switchState(device: Device): Observable<ActionResponse> {
    const params = new HttpParams()
    .set('type', 'command')
    .append('param', 'switchlight')
    .append('idx', device.idx)
    .append('switchcmd', 'Toggle')

    return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
    .pipe(map((response: HttpResponse<ActionResponse>) => {
      if(response.body.status === 'OK') {
        this.getDevices().subscribe();
      } else {
        this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, 'danger');
      }
      return response.body;
    })) as Observable<ActionResponse>;
  }

  public updateName(device: Device, newName: string): Observable<ActionResponse> {
    const params = new HttpParams()
    .set('type', 'setused')
    .append('idx', device.idx)
    .append('name', newName)
    .append('description', device.Description)
    .append('used', 'true');

    return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
    .pipe(map((response: HttpResponse<ActionResponse>) => {
      if(response.body.status === 'OK') {
        this.getDevices().subscribe();
      } else {
        this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, 'danger');
      }
      return response.body;
    }));
  }

  public updateDescription(device: Device, newDescription: string): Observable<ActionResponse> {
    const params = new HttpParams()
      .set('description', newDescription)
      .append('idx', device.idx)
      .append('name', device.Name)
      .append('type', 'setused')
      .append('used', 'true');
    
    return this.http.get<ActionResponse>(environment.apiUrl, {params: params, observe: 'response'})
    .pipe(map((response: HttpResponse<ActionResponse>) => {
      if(response.body.status === 'OK') {
        this.getDevices().subscribe();
      } else {
        this.notificationService.sendNotificationTemp(response.body.status + ': ' + response.body.title, 'danger');
      }
      return response.body;
    })) 
  }

  public isSwitchType(device: Device): boolean {
    return device.SwitchType === "On/Off" || device.SwitchType === "Dimmer";
  }
}
