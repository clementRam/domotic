import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './components/scene/scene.component';
import { ScenesComponent } from './components/scenes/scenes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SceneComponent,
    ScenesComponent
  ],
  exports: [
    SceneComponent,
    ScenesComponent
  ]
})
export class ScenesModule { }
