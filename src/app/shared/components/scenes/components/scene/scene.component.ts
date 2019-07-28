import { Component, OnInit, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Scene } from 'src/app/shared/models/scene.model';
import { SceneService } from 'src/app/shared/services/scene.service';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  public faHome = faHome;

  @Input()
  scene: Scene;

  constructor(private sceneService: SceneService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.sceneService.setScene(this.scene).subscribe();
  }

}
