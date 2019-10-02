import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: "automatisation", loadChildren: () => import('./automatisation/automatisation.module').then(m => m.AutomatisationModule)},
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
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