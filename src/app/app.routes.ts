import { Routes } from '@angular/router';
import { predictionRoutes } from './prediction/prediction.routing';

export const ROUTES: Routes = [
//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...predictionRoutes,

];
