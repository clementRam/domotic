import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe();
  }

}
