import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/devices/services/device.service';
import { SceneService } from 'src/app/scenes/services/scene.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(private deviceService: DeviceService, private sceneService: SceneService) { }

  ngOnInit() {
    this.deviceService.getDevices().subscribe();
    this.sceneService.getScenes().subscribe();
  }

}
