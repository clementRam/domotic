import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AutomatisationViewComponent } from './container/automatisation-view/automatisation-view.component';
import { AutomatisationRoutingModule } from './automatisation-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AutomatisationRoutingModule
  ],
  declarations: [
    AutomatisationViewComponent
  ]
})
export class AutomatisationModule { }
