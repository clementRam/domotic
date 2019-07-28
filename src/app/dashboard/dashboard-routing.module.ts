import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './container/dashboard-view/dashboard-view.component';
 
const heroesRoutes: Routes = [
  { path: 'dashboard',  component: DashboardViewComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }