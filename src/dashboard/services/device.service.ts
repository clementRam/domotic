import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';
import { DefaultStoreDataNames, Store } from 'src/store/store';
import { map } from 'rxjs/operators';
import { ActionResponse } from '../models/actionResponse.model';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor(private http: HttpClient, private store: Store) { }

  getDevices(): Observable<Devices> {
    const params = new HttpParams()
    .set('type', 'devices')
    .append('favorite', '1')
    .append('filter', 'all')
    .append('used', 'true');

    return this.http.get<Devices>(environment.apiUrl, {
      params: params
    }).pipe(map(devices => {
      this.store.set(DefaultStoreDataNames.DEVICES, devices)
      return devices;
    })
    ) as Observable<Devices>
  }

  getDevice(idx: string): Observable<Device> {
    const params = new HttpParams()
    .set('rid', idx)
    .append('type', 'devices');

    return this.http.get<Device>(environment.apiUrl, {params: params});
  }

  public switchState(device: Device): void {
    if(this.isSwitchType(device)) {
      const params = new HttpParams()
      .set('type', 'command')
      .append('param', 'switchlight')
      .append('idx', device.idx)
      .append('switchcmd', 'Toggle')
  
      this.http.get(environment.apiUrl, {params: params, observe: 'response'})
      .subscribe((response: HttpResponse<ActionResponse>) => {
        if(response.body.status === 'OK') {
          this.getDevices().subscribe();
        }
      });
    }
  }

  private isSwitchType(device: Device): boolean {
    return device.SwitchType === "On/Off" || device.SwitchType === "Dimmer";
  }
}
