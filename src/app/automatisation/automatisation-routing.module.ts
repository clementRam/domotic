import { AutomatisationViewComponent } from "src/app/automatisation/container/automatisation-view/automatisation-view.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const automatisationRoutes: Routes = [
  { path: '', component: AutomatisationViewComponent },
];

@NgModule({
    imports: [
      RouterModule.forChild(automatisationRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AutomatisationRoutingModule {}