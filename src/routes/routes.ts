import { Routes } from "@angular/router";
import { DashboardViewComponent } from "src/app/dashboard/container/dashboard-view/dashboard-view.component";
import { AutomatisationViewComponent } from "src/app/automatisation/container/automatisation-view/automatisation-view.component";
import { HomeViewComponent } from "src/app/home/container/home-view/home-view.component";

export const appRoutes: Routes = [
  { path: "dashboard", component: DashboardViewComponent },
  { path: "automatisation", component: AutomatisationViewComponent },
  { path: "home", component: HomeViewComponent },
  { path: "**", redirectTo: "dashboard"}
];
