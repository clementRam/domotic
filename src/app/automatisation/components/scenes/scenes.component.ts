import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Scenes } from '../../models/scenes.model';
import { SceneService } from '../../services/scene.service';
import { Store, DefaultStoreDataNames } from 'src/store/store';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss']
})
export class ScenesComponent implements OnInit {

  scenes$: Observable<Scenes>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.scenes$ = this.store.select(DefaultStoreDataNames.SCENES);
  }

}
