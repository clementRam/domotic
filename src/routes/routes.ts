import { Routes } from "@angular/router";
import { DashboardViewComponent } from "src/dashboard/container/dashboard-view/dashboard-view.component";

export const appRoutes: Routes = [
  { path: "dashboard", component: DashboardViewComponent },
  { path: "**", redirectTo: "dashboard"}
];
