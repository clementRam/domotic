import { Component, OnInit, Input } from '@angular/core';
import { Scene } from '../../models/scene.model';
import { SceneService } from '../../services/scene.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input()
  scene: Scene;

  constructor(private sceneService: SceneService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.sceneService.setScene(this.scene).subscribe();
  }

}
