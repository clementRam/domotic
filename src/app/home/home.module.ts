import { NgModule } from '@angular/core';
import { HomeViewComponent } from './container/home-view/home-view.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeViewComponent
  ],
  declarations: [
    HomeViewComponent
  ]
})
export class HomeModule { }
