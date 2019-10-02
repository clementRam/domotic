import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
 
const dashboardRoutes: Routes = [
  { path: '',  component: DashboardViewComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }