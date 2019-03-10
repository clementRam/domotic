import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/devices/services/device.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices({favorite: 0}).subscribe();
  }

}
