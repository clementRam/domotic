import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Scenes } from '../../models/scenes.model';
import { Store, DefaultStoreDataNames } from 'src/store/store';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss']
})
export class ScenesComponent implements OnInit {

  @Input()
  favoriteView: Boolean;

  scenes$: Observable<Scenes>;

  constructor(private store: Store) { }

  ngOnInit() {
    if(this.favoriteView === null)
      this.favoriteView = false;
      
    this.scenes$ = this.store.select(DefaultStoreDataNames.SCENES);
  }

}
