import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/scenes/services/scene.service';

@Component({
  selector: 'app-automatisation-view',
  templateUrl: './automatisation-view.component.html',
  styleUrls: ['./automatisation-view.component.scss']
})
export class AutomatisationViewComponent implements OnInit {

  constructor(private sceneService: SceneService) { }

  ngOnInit() {
    this.sceneService.getScenes().subscribe();
  }

}
