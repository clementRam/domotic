import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AutomatisationViewComponent } from './container/automatisation-view/automatisation-view.component';
import { ScenesModule } from '../scenes/scenes.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule,
    ScenesModule
  ],
  declarations: [
    AutomatisationViewComponent
  ]
})
export class AutomatisationModule { }
