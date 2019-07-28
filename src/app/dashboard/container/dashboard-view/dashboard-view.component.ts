import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/services/device.service';
import { SceneService } from 'src/app/shared/services/scene.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(private deviceService: DeviceService, private sceneService: SceneService) { }

  ngOnInit() {
    this.deviceService.getDevices({favorite: "1"}).subscribe();
    this.sceneService.getScenes().subscribe();
  }

}
