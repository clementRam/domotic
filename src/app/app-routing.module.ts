import { Routes, RouterModule } from "@angular/router";
import { AutomatisationViewComponent } from "src/app/automatisation/container/automatisation-view/automatisation-view.component";
import { HomeViewComponent } from "src/app/home/container/home-view/home-view.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: "automatisation", component: AutomatisationViewComponent },
  { path: "home", component: HomeViewComponent },
  { path: "**", redirectTo: "dashboard"}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}