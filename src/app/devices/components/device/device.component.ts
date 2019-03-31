import { Component, OnInit, Input } from '@angular/core';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Device } from '../../models/device.model';
import { DeviceService } from '../../services/device.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';

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

  handleFocusOutDescription(event: any): void {
    this.deviceService.updateDescription(this.device, event.target.value).subscribe();
  }

}
