import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/dashboard/models/device.model';
import { DeviceService } from 'src/dashboard/services/device.service';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input()
  device: Device;

  devicesEditable: boolean;

  constructor(private deviceService: DeviceService, private store: Store) { }

  ngOnInit() {
    console.log(this.device)
    this.store.select<boolean>(DefaultStoreDataNames.DEVICES_EDITABLE)
    .subscribe(devicesEditable => this.devicesEditable = devicesEditable);
  }

  handleClick(): void{
    if(this.deviceService.isSwitchType(this.device) && !this.devicesEditable)
      this.deviceService.switchState(this.device).subscribe();
  }

  handleFocusOutName(event: any): void {
    this.deviceService.updateName(this.device, event.target.value).subscribe();
  }

}
