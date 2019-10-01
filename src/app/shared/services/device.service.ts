import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';
import { DefaultStoreDataNames, Store } from 'src/app/shared/store/store';
import { map } from 'rxjs/operators';
import { DevicesParameters } from '../models/devices-parameters.model';
import { DeviceImprovementService } from './device-improvement.service';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor(private http: HttpClient, private store: Store, private deviceImprovementService: DeviceImprovementService) { }

  public getDevices(options?: Partial<DevicesParameters>): Observable<Devices> {
    
    const defaultParams: DevicesParameters = {
      type: 'devices',
      favorite: "0",
      filter: 'all',
      used: "true"
    }
    
    const params: DevicesParameters = {...defaultParams, ...options};

    const httpParams = new HttpParams()
      .set('type', params.type)
      .append('favorite', params.favorite)
      .append('filter', params.filter)
      .append('used', params.used);

    return this.http.get<Devices>(environment.apiUrl, {
      params: httpParams
    }).pipe(map(devices => {

      devices.result = devices.result.map(device => this.deviceImprovementService.addMethodsToDevice(device, this.getDevices(params)));

      this.store.set(DefaultStoreDataNames.DEVICES, devices.result);

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
}
