import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/dashboard/models/device.model';
import { DeviceService } from 'src/dashboard/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input()
  device: Device;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  handleClick(): void{
    this.deviceService.switchState(this.device);
  }

}
