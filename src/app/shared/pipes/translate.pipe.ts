import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})

export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(key: any): any {
    let translation = this.translate.data;
      for (const item of key.split('.')) {
        if (translation.hasOwnProperty(item)) {
          translation = translation[item];
        } else {
          return key;
        }
      }
    return translation || key;
  }
}
