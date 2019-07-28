import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AutomatisationViewComponent } from './container/automatisation-view/automatisation-view.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [
    AutomatisationViewComponent
  ]
})
export class AutomatisationModule { }
