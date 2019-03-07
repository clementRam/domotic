import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomatisationViewComponent } from './container/automatisation-view/automatisation-view.component';
import { SceneComponent } from './components/scene/scene.component';
import { ScenesComponent } from './components/scenes/scenes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [AutomatisationViewComponent, SceneComponent, ScenesComponent]
})
export class AutomatisationModule { }
