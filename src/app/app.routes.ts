import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  { path: 'Portfolio', component: DashboardComponent},
  { path: '', redirectTo: '/Portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: '/Portfolio' }
];