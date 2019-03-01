import { Routes } from "@angular/router";
import { DashboardViewComponent } from "src/app/dashboard/container/dashboard-view/dashboard-view.component";

export const appRoutes: Routes = [
  { path: "", component: DashboardViewComponent },
  { path: "**", redirectTo: ""}
];
