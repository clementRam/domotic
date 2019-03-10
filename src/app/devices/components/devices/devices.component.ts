import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, DefaultStoreDataNames } from 'src/store/store';
import { Devices } from '../../models/devices.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices$: Observable<Devices> 

  constructor(private store: Store) { }

  ngOnInit() {
    this.devices$ = this.store.select<Devices>(DefaultStoreDataNames.DEVICES);
  }
}
