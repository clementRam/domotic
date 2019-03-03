import { Component, OnInit } from '@angular/core';
import { faHome, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public faHome = faHome;
  public faClock = faClock;

  constructor() { }

  ngOnInit() {
  }

}
