import { Component } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'domotic';

  constructor(private translate: TranslateService) {
    translate.use("fr").then(() => {});
  }
}
