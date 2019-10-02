import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Devices } from '../../../../models/devices.model';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public devices$: Observable<Devices> 

  constructor(private store: Store, private deviceService: DeviceService) { }

  ngOnInit() {
    this.devices$ = this.store.select<Devices>(DefaultStoreDataNames.DEVICES);
    // this.deviceService.getDevices({favorite: "1"}).subscribe(d => this.store.set(DefaultStoreDataNames.DEVICES, d.result))
  }
}
