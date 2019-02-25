import { Component, OnInit } from '@angular/core';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  devicesEditable$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.devicesEditable$ = this.store.select<boolean>(DefaultStoreDataNames.DEVICES_EDITABLE);
  }

  handleClickEdit(): void {
    this.store.set(DefaultStoreDataNames.DEVICES_EDITABLE, true);
  }

  handleClickSave(): void {
    this.store.set(DefaultStoreDataNames.DEVICES_EDITABLE, false);
  }

}
