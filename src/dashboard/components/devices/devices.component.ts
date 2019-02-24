import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from 'src/dashboard/models/devices.model';
import { DeviceService } from 'src/dashboard/services/device.service';
import { Store, DefaultStoreDataNames } from 'src/store/store';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices$: Observable<Devices> 

  constructor(private deviceService: DeviceService, private store: Store) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe();
    this.devices$ = this.store.select<Devices>(DefaultStoreDataNames.DEVICES);
  }

}
