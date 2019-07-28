import { Component, OnInit, Input } from '@angular/core';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Device } from '../../../../models/device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input()
  device: Device;

  devicesEditable: boolean;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select<boolean>(DefaultStoreDataNames.DEVICES_EDITABLE)
    .subscribe(devicesEditable => this.devicesEditable = devicesEditable);
  }

  handleClick(): void{
    if(!this.devicesEditable && this.device.hasOwnProperty('switchState'))
      this.device.switchState().subscribe();
  }
  
  handleFocusOutName(event: any): void {
    this.device.updateName(event.target.value).subscribe();
  }

  handleFocusOutDescription(event: any): void {
    this.device.updateDescription(event.target.value).subscribe();
  }

}
