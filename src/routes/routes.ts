import { Routes } from "@angular/router";
import { DashboardViewComponent } from "src/app/dashboard/container/dashboard-view/dashboard-view.component";
import { AutomatisationViewComponent } from "src/app/automatisation/container/automatisation-view/automatisation-view.component";

export const appRoutes: Routes = [
  { path: "dashboard", component: DashboardViewComponent },
  { path: "automatisation", component: AutomatisationViewComponent },
  { path: "**", redirectTo: "dashboard"}
];
